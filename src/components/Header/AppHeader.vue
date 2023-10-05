<template>
  <header>
    <img src="/logo-white.svg" alt="Logo" />
    <p>New Loan Scenario</p>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "AppHeader"
})
</script>

<style scoped>
  header {
    background: #041c33;
    padding: 1rem;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  p {
    font-size: .75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0;
  }
</style>