import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import Scrollbar from './smooth-scrollbar-plugin.js'

import './assets/Styles/_site.scss'
import './assets/main.css'

createApp(App).mount('#app')
App.use(Scrollbar)
App.mount('#app')
