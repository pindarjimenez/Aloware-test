import VueRouter from 'vue-router';
import Post from './components/Post.vue';

let routes = [
    {
        name: 'PostModule',
        path: '/',
        component: Post
    },
];

export default new VueRouter({
    routes,
});
