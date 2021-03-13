import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'


// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyALIbOGSTtDBnssuSi1L5hQStdbFwu0B08",
      authDomain: "oniweb.firebaseapp.com",
      projectId: "oniweb",
      storageBucket: "oniweb.appspot.com",
      messagingSenderId: "754301519837",
      appId: "1:754301519837:web:bac64f41aad169648a9834",
      measurementId: "G-XCT8WYH1NY"
    };
    firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
