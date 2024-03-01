// smooth-scrollbar-plugin.js
import Scrollbar from 'smooth-scrollbar'

const SmoothScrollbarPlugin = {
  install(app) {
    app.config.globalProperties.$scrollbar = Scrollbar
  }
}

export default SmoothScrollbarPlugin
