import { createMemoryHistory, createRouter } from 'vue-router'

import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

const routes = [
    { path: '/', redirect: '/news' },
    { path: '/news', name: 'news', component: NewsView },
    { path: '/ask', name: 'ask', component: AskView },
    { path: '/jobs', name: 'jobs', component: JobsView },
    { path: '/item/:id', component: ItemView },
    { path: '/user/:id', component: UserView },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})