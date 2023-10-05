import SpreadJS from '@/SpreadJS.vue'
import * as VueRouter from 'vue-router'

const routes = [
  { path: '/', redirect: '/demo/partial' },
  { path: '/demo/:demoType', component: SpreadJS, props: true },
  { path: '/demo/:demoType/toolbar', component: SpreadJS, props: { toolbar: true } },
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router