import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
export default {
  install (Vue) {
    Vue.component('layout-header', layoutHeader)
    Vue.component('layout-aside', layoutAside)
  }
}
