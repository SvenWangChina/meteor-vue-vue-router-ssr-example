/**
 * 所有route
 *
 * @author [author]
 */
import Home from './ui/Home/index.vue';
import About from './ui/About.vue';
import NotFound from './ui/NotFound.vue';

export default [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '*', name: 'not-found', component: NotFound },
];