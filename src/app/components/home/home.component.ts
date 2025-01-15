import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userName: string = '';
  budget: number = 0;
  totalExpenses: number = 0;
  remainingBudget: number = 0;
  budgetUtilization: number = 0;
  topCategory: string = 'N/A';
  isUserDetailsSet: boolean = false;
  transactions: Array<{ description: string; amount: number; time: string }> = [];
  newTransaction = {
    description: '',
    amount: 0,
  };
  newBudget: number = 0; // Holds the new budget value entered by the user

  constructor(private router: Router) {} // Inject Router

  ngOnInit() {
    this.loadData(); // Load saved data from localStorage
  }

  setUserDetails() {
    if (!this.userName || this.userName.trim().length < 2) {
      alert('Please enter a valid name (at least 2 characters)');
      return;
    }

    if (!this.budget || this.budget <= 0 || isNaN(this.budget)) {
      alert('Please enter a valid budget amount (greater than 0)');
      return;
    }

    this.isUserDetailsSet = true;
    this.calculateBudget();
    this.saveData(); // Save updated data to localStorage
  }

  calculateBudget() {
    if (!this.isUserDetailsSet) {
      return;
    }

    this.totalExpenses = this.transactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );

    this.remainingBudget = this.budget - this.totalExpenses;
    this.budgetUtilization = Math.min(
      Math.round((this.totalExpenses / this.budget) * 100),
      100
    );
    this.topCategory = this.transactions.length > 0
      ? this.transactions[0].description
      : 'N/A';

    this.saveData(); // Save updated calculations to localStorage
  }

  addTransaction() {
    if (!this.isUserDetailsSet) {
      alert('Please set user details first');
      return;
    }

    if (!this.newTransaction.description || 
        this.newTransaction.description.trim().length < 2) {
      alert('Please enter a valid description (at least 2 characters)');
      return;
    }

    if (!this.newTransaction.amount || 
        this.newTransaction.amount <= 0 || 
        isNaN(this.newTransaction.amount)) {
      alert('Please enter a valid amount (greater than 0)');
      return;
    }

    this.transactions.push({
      ...this.newTransaction,
      time: new Date().toLocaleTimeString(),
    });

    this.newTransaction.description = '';
    this.newTransaction.amount = 0;
    this.calculateBudget();
  }

  resetAllData() {
    const confirmation = confirm(
      'Are you sure you want to reset all data, including transactions?'
    );

    if (confirmation) {
      this.userName = '';
      this.budget = 0;
      this.transactions = [];
      this.isUserDetailsSet = false;
      this.calculateBudget();
      this.clearData(); // Clear all data from localStorage
    }
  }

  updateBudget() {
    if (!this.isUserDetailsSet) {
      alert('Please set user details first');
      return;
    }

    if (!this.newBudget || this.newBudget <= 0 || isNaN(this.newBudget)) {
      alert('Please enter a valid budget amount (greater than 0)');
      return;
    }

    this.remainingBudget += this.newBudget;
    this.budget += this.newBudget;
    this.newBudget = 0;
    this.calculateBudget();
    alert('Budget successfully updated!');
  }

  viewInsights() {
    // Navigate to the Insights component
    this.router.navigate(['/insights']);
  }

  // LocalStorage Methods
  saveData() {
    const data = {
      userName: this.userName,
      budget: this.budget,
      totalExpenses: this.totalExpenses,
      remainingBudget: this.remainingBudget,
      transactions: this.transactions,
      isUserDetailsSet: this.isUserDetailsSet,
    };
    localStorage.setItem('expenseTrackerData', JSON.stringify(data));
  }

  loadData() {
    const savedData = localStorage.getItem('expenseTrackerData');
    if (savedData) {
      const data = JSON.parse(savedData);
      this.userName = data.userName || '';
      this.budget = data.budget || 0;
      this.totalExpenses = data.totalExpenses || 0;
      this.remainingBudget = data.remainingBudget || 0;
      this.transactions = data.transactions || [];
      this.isUserDetailsSet = data.isUserDetailsSet || false;
      this.calculateBudget(); // Ensure budget calculations are consistent
    }
  }

  clearData() {
    localStorage.removeItem('expenseTrackerData');
  }
}
