<script setup>
const emit = defineEmits(['transactionDeleted'])

defineProps({
  transactions: {
    type: Array,
    required: true
  }
})

const deleteTransaction = (id) => {
  emit('transactionDeleted', id)
}
</script>

<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      :key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.text }} <span>£{{ transaction.amount }}</span
      ><button @click="deleteTransaction(transaction.id)" class="delete-btn">x</button>
    </li>
    <!--    <li class="minus">-->
    <!--      Cash <span>-$400</span><button class="delete-btn">x</button>-->
    <!--    </li>-->
    <!--    <li class="plus">-->
    <!--      Paycheck <span>$800</span><button class="delete-btn">x</button>-->
    <!--    </li>-->
  </ul>
</template>

<style scoped>
h3 {
  border-bottom: 1px solid #bbb;
  padding-bottom: 10px;
  margin: 40px 0 10px;
}

.delete-btn:focus {
  outline: 0;
}

.list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
}

.list li {
  background-color: #fff;
  box-shadow: var(--box-shadow);
  color: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;
}

.delete-btn {
  cursor: pointer;
  background-color: #e74c3c;
  border: 0;
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;

  @media only screen and (max-width: 768px) {
    opacity: 1;
  }
}

.list li:hover .delete-btn {
  opacity: 1;
}
</style>
