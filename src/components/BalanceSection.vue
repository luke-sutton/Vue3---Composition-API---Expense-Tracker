<script setup>
defineProps({
  total: {
    type: Number,
    required: true
  }
})
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
