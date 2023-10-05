<template>
  <app-sub-header title="18493 Testing Rd, Baton Rouge, LA 70810" :navigation="navigation" :actions="actions"/>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppSubHeader from '@/components/Header/AppSubHeader.vue'

export default defineComponent({
  name: "DefaultLayout",
  components: {
    AppSubHeader,
  },
  props: {
    actions: {
      type: Array,
      default: () => [],
    },
    navigation: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    }
  }
})
</script>