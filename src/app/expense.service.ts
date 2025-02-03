// expense.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  // Using BehaviorSubject to hold the data and make it observable
  private expensesSubject = new BehaviorSubject<any[]>([]);
  private budgetSubject = new BehaviorSubject<number>(0);

  constructor() {}

  // Get the current expenses
  getExpenses() {
    return this.expensesSubject.asObservable();
  }

  // Get the current budget
  getBudget() {
    return this.budgetSubject.asObservable();
  }

  // Update expenses
  setExpenses(expenses: any[]) {
    this.expensesSubject.next(expenses);
  }

  // Update the budget
  setBudget(budget: number) {
    this.budgetSubject.next(budget);
  }
}
