import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./assets/style.scss";
window.AOS = require('./assets/vendor/aos/aos.js');
require('./assets/vendor/bootstrap/js/bootstrap.bundle.min.js');
window.GLightbox = require('./assets/vendor/glightbox/js/glightbox.min.js');
window.Isotope = require('./assets/vendor/isotope-layout/isotope.pkgd.min.js');
require('./assets/vendor/php-email-form/validate.js');
require('./assets/vendor/purecounter/purecounter.js');
window.Swiper = require('./assets/vendor/swiper/swiper-bundle.min.js');
window.Typed = require('./assets/vendor/typed.js/typed.min.js');
require('./assets/vendor/waypoints/noframework.waypoints.js');

createApp(App).use(store).use(router).mount('#app')
