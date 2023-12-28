<script setup>
import { useExpenseTrackerStore } from '@/stores/transactions.js'
import { computed } from 'vue'

const store = useExpenseTrackerStore()

const total = computed(() => store.getTotal())
</script>

<template>
  <h4>Your Balance</h4>
  <h1 id="balance">£{{ total }}</h1>
</template>

<style scoped>
h1 {
  letter-spacing: 1px;
  margin: 0;
}

h4 {
  margin: 0;
  text-transform: uppercase;
}
</style>
