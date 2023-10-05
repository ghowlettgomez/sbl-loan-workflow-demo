import './assets/main.css'
import router from './router'
import axios from '@/plugins/axios'

import { createApp } from 'vue'
import App from './App.vue'
import { GcSpreadSheets, GcWorksheet, GcColumn } from '@grapecity/spread-sheets-vue'
import Designer from "@grapecity/spread-sheets-designer-vue"
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import './css/main.css'

let app = createApp(App);
app.component('gc-spread-sheets', GcSpreadSheets);
app.component('gc-worksheet', GcWorksheet);
app.component('gc-column', GcColumn);
app.component("gc-spread-sheets-designer", Designer);
app.use(router)
app.use(axios)
app.use(ToastPlugin)
app.mount('#app')
