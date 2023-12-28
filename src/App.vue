<!-- App.vue -->
<template>
  <div>
    <Header />
    <div class="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList
        :transactions="transactions"
        @transactionDeleted="handleTransactionDeleted"
      />
      <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
    </div>
  </div>
</template>

<script setup>
import Header from './components/HeaderSection.vue'
import Balance from './components/BalanceSection.vue'
import IncomeExpenses from '../../vue-expense-tracker/src/components/IncomeExpenses.vue'
import TransactionList from '../../vue-expense-tracker/src/components/TransactionList.vue'
import AddTransaction from '../../vue-expense-tracker/src/components/AddTransaction.vue'
import { useExpenseTrackerStore } from '@/stores/transactions.js'
import { onMounted, computed } from 'vue'

import { useToast } from 'vue-toastification'

const toast = useToast()

const store = useExpenseTrackerStore()

const transactions = computed(() => store.transactions)

onMounted(() => {
  store.initTransactions()
})

const handleTransactionSubmitted = (transactionData) => {
  store.addTransaction(transactionData)
  toast.success('Transaction added')
}

const handleTransactionDeleted = (id) => {
  store.deleteTransaction(id)
  toast.success('Transaction deleted')
}
</script>
