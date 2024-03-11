import { createApp } from 'vue'
import App from './App.vue'

// Global styles first
import '@quasar/extras/animate/fadeIn.css'
import '@quasar/extras/animate/fadeOut.css'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/themify/themify.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Quasar } from 'quasar'
import 'vuestic-ui/css'
import './assets/Styles/_site.scss'
import './assets/main.css'

// JavaScript libraries next
import 'bootstrap'
import { createVuestic } from 'vuestic-ui'
import router from './router/index.js'
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
app.use(Quasar, {
  plugins: {}, // Specify Quasar plugins here if needed
  config: {
    brand: {
      primary: '#23e066', // String value
      secondary: '#002c85', // String value
      positive: '#40e583', // String value
      info: '#2c82e0', // String value
      negative: '#e34b4a', // String value
      warning: '#ffc200', // String value
      gray: '#babfc2', // String value
      dark: '#34495e', // String value

      // Custom colors
      customPrimary: '#161616', // String value
      customsSecondary: '#2c2c2c', // String value
      customSuccess: '#0ee636', // String value
      customDanger: '#f00' // String value
    }
  }
})
app.use(vuestic)
app.use(router)
app.use(Scrollbar)

app.mount('#app')
