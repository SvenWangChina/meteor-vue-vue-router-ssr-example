/**
 * 初始化插件
 *
 * @author [author]
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeteorTracker from 'vue-meteor-tracker';

console.log('init vue plugins start');
Vue.use(VueRouter);
Vue.use(VueMeteorTracker);
Vue.config.meteor.freeze = true;
console.log('init vue plugins end');