import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';

import {
    library as fontAwesomeLibrary,
    config as fontAwesomeConfig,
} from '@fortawesome/fontawesome-svg-core';

import {
    faUpload,
    faCheck,
    faArrowDown,
    faSpinner,
    faTimes,
    faPlus,
    faMinus,
    faSearch,
    faOilCan,
    faRoad,
    faPlayCircle,
    faClock,
    faAngleDoubleDown,
    faChartLine,
    faCalculator,
    faEthernet,
    faExclamation,
    faSignInAlt,
    faDownload,
    faTicketAlt,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

console.log(
    `wellPlanner Test App, version: ${(process.env as Record<string, string>).GIT_VERSION}`
);

fontAwesomeConfig.autoAddCss = false;
fontAwesomeLibrary.add(
    faUpload,
    faCheck,
    faArrowDown,
    faSpinner,
    faTimes,
    faPlus,
    faMinus,
    faSearch,
    faOilCan,
    faRoad,
    faPlayCircle,
    faClock,
    faAngleDoubleDown,
    faChartLine,
    faCalculator,
    faEthernet,
    faExclamation,
    faSignInAlt,
    faDownload,
    faTicketAlt
);

import '@/main.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app');
