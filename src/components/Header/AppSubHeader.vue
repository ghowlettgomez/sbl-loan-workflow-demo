<template>
  <div id="sub-header" class="container-full">
    <h1>{{ title }}</h1>
    <nav>
      <ul>
        <li v-for="(item, i) in navigation" @click="handleClick" :key="i">
          <router-link :to="item.to">{{ item.text }}</router-link>
        </li>
      </ul>
    </nav>
    <ul id="actions">
      <li v-for="(action, i) in actions" @click="handleClick" class="button" :key="i">
        {{ action.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "DefaultLayout",
  props: {
    title: {
      type: String,
      default: '',
    },
    actions: {
      type: Array,
      default: () => [],
    },
    navigation: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick() {
      this.$toast.info('This button is not active in testing.', { position: 'top' })
    }
  },
})
</script>

<style scoped>
h1 {
   font-family: DidotDisplay, serif;
   margin: 0;
   flex-grow: 1;
 }

 #sub-header {
   background: #0e3760;
   color: #fff;
   display: flex;
   align-items: center;
   justify-content: space-between;
 }

 #actions {
   margin-left: 2rem;
 }

 nav {
align-self: stretch;
display: flex;
align-items: center;
}

 ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
 }

 nav ul li {
   cursor: pointer;
   border-bottom: 4px solid transparent;
 }

 a {
   display: block;
   color: #fff;
   padding: 1.5rem 0;
   text-decoration: none;
 }

 li:hover { border-color: #3598f1; }
</style>