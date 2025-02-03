import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-insights',
  imports: [NgxEchartsModule, DecimalPipe],
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {
  // User Data
  userName: string = '';
  budget: number = 0;
  transactions: { description: string; amount: number; time: string; category: string }[] = [];

  // Insights Data
  topCategory: string = '';
  topCategoryAmount: number = 0;
  highestExpense: { description: string; amount: number } = { description: '', amount: 0 };
  budgetUtilization: number = 0;
  remainingBudget: number = 0;

  constructor() {}

  ngOnInit() {
    this.loadData();
    this.calculateInsights();
  }

  /**
   * Loads the data from localStorage.
   */
  loadData() {
    const savedData = localStorage.getItem('expenseTrackerData');
    if (savedData) {
      const data = JSON.parse(savedData);
      this.userName = data.userName || '';
      this.budget = data.budget || 0;
      this.transactions = data.transactions || [];
    }
  }

  /**
   * Recalculates all insights based on transactions and budget.
   */
  calculateInsights(): void {
    // Calculate total expenses
    const totalExpenses = this.transactions.reduce((sum, tx) => sum + tx.amount, 0);

    // Find remaining budget
    this.remainingBudget = this.budget - totalExpenses;

    // Calculate budget utilization
    this.budgetUtilization = totalExpenses > 0 ? Math.min((totalExpenses / this.budget) * 100, 100) : 0;

    // Find the highest expense
    const maxExpense = this.transactions.reduce(
      (max, tx) => (tx.amount > max.amount ? tx : max),
      { description: '', amount: 0 }
    );
    this.highestExpense = { description: maxExpense.description, amount: maxExpense.amount };

    // Find top spending category
    const categoryTotals: { [key: string]: number } = {};
    this.transactions.forEach((tx) => {
      categoryTotals[tx.category] = (categoryTotals[tx.category] || 0) + tx.amount;
    });

    const topCategoryEntry = Object.entries(categoryTotals).reduce(
      (max, entry) => (entry[1] > max[1] ? entry : max),
      ['', 0]
    );
    this.topCategory = topCategoryEntry[0];
    this.topCategoryAmount = topCategoryEntry[1];
  }

  /**
   * Refresh insights (e.g., fetch data or recalculate).
   */
  refreshInsights(): void {
    console.log('Refreshing insights...');
    this.calculateInsights();
  }

  /**
   * Adds a new transaction and updates insights.
   * @param description Transaction description.
   * @param amount Transaction amount.
   * @param category Transaction category.
   */
  addTransaction(description: string, amount: number, category: string): void {
    const newTransaction = {
      description,
      amount,
      time: new Date().toISOString(),
      category,
    };
    this.transactions.push(newTransaction);
    this.calculateInsights();
    this.saveData(); // Save data after adding a new transaction
  }

  /**
   * Resets all data for a fresh start.
   */
  resetAllData(): void {
    this.userName = '';
    this.budget = 0;
    this.transactions = [];
    this.calculateInsights();
    this.clearData(); // Clear data from localStorage
  }

  // Save data to localStorage after updating
  saveData() {
    const data = {
      userName: this.userName,
      budget: this.budget,
      transactions: this.transactions,
    };
    localStorage.setItem('expenseTrackerData', JSON.stringify(data));
  }

  // Clear data from localStorage
  clearData() {
    localStorage.removeItem('expenseTrackerData');
  }
}
