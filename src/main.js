import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter);
Vue.config.productionTip = false

// index.js or main.js
import 'vuetify/dist/vuetify.min.css'
// main.styl
// import '~vuetify/src/stylus/main'

const router = new VueRouter({
  routes: Routes
});

new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#app')
