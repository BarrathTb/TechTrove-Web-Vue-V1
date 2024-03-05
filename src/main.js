import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap and Bootstrap Icons
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Vuestic UI
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'

import './assets/Styles/_site.scss'
import './assets/main.css'

import Scrollbar from './smooth-scrollbar-plugin.js'

const vuestic = createVuestic({
  config: {
    colors: {
      variables: {
        // Default colors
        primary: '#23e066',
        secondary: '#002c85',
        success: '#40e583',
        info: '#2c82e0',
        danger: '#e34b4a',
        warning: '#ffc200',
        gray: '#babfc2',
        dark: '#34495e',

        // Custom colors
        customPrimary: '#161616',
        customsSecondary: '#2c2c2c',
        customSuccess: '#0ee636',
        customDanger: '#f00'
      }
    }
  }
})

const app = createApp(App)

app.use(vuestic)
app.use(Scrollbar)

app.mount('#app')