import {createApp} from 'vue';
import App from './App.vue';
import '/src/assets/reset.scss';
import SvgIcon from "./components/SvgIcon.vue";

createApp(App).component('svg-icon', SvgIcon).mount('#app');
