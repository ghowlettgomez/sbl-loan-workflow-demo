<template>
  <app-header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/components/Header/AppHeader.vue'

export default defineComponent({
  name: "App",
  components: {
    AppHeader,
  }
})
</script>

