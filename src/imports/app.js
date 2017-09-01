/**
 * 初始化App
 *
 * @author [author]
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import './initPlugins';
import routes from './routes';
import App from './ui/App/index.vue';

export default CreateApp = (context) => {
    const router = new VueRouter({
        routes,
        mode: 'history',
    });

    return {
        router,
        app: new Vue({
            router,
            ...App,
            el: '#app',
        }),
    };
};