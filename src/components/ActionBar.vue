<template>
  <div id="action-bar">
    <div class="dropdown-list" @click="handleClick">
      <p>Fannie Mae &#9660;</p>
    </div>
    <p>Financials currently estimated <img src="/information.png" height="10" /></p>
    <button @click="handleClick">Upload +</button>
    <p>OR</p>
    <button class="outline" @click="handleClick">New Blank Template</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ActionBar",
  methods: {
    handleClick() {
      this.$toast.info('This button is not active in testing.', { position: 'top' })
    }
  },
})
</script>

<style scoped>
#action-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #ababab;
}

.dropdown-list {
  background: #f8f8f8;
  border-right: 1px solid #ababab;
  display: inline-block;
}

.dropdown-list p {
  margin: 0;
  display: inline-block;
  padding: 1rem;
}

button:first-of-type {
  background: #ecf1f6;
  border: none;
}
</style>