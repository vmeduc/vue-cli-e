import Vue from 'vue';
import VueMaterial from "vue-material";
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// // asset imports
// import "vue-material/dist/vue-material.min.css";
// import "./assets/scss/material-dashboard.scss";
// import "@fortawesome/fontawesome-free/css/all.css";
// import "./assets/scss/short_classes.scss";
// import "./assets/css/demo.css";

export default {
  install(Vue) {
    Vue.use(VueMaterial);
  }
}

Vue.use(VueMaterial);