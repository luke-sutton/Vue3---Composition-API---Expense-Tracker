import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useExpenseTrackerStore = defineStore('expenseTracker', () => {
  const transactions = ref([])

  function addTransaction(transactionData) {
    transactions.value.push({
      id: generateUniqueId(),
      text: transactionData.text,
      amount: transactionData.amount
    })
    saveTransactionsToLocalStorage()
  }

  function deleteTransaction(id) {
    transactions.value = transactions.value.filter((transaction) => transaction.id !== id)
    saveTransactionsToLocalStorage()
  }

  function saveTransactionsToLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions.value))
  }

  function getTotal() {
    return transactions.value.reduce((acc, transaction) => acc + transaction.amount, 0)
  }

  function getIncome() {
    return transactions.value
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0)
      .toFixed(2)
  }

  function getExpenses() {
    return transactions.value
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0)
      .toFixed(2)
  }

  function generateUniqueId() {
    return Math.floor(Math.random() * 1000000)
  }

  function initTransactions() {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions'))
    if (savedTransactions) {
      transactions.value = savedTransactions
    }
  }

  return {
    transactions: computed(() => transactions.value),
    addTransaction,
    deleteTransaction,
    getTotal,
    getIncome,
    getExpenses,
    initTransactions
  }
})
