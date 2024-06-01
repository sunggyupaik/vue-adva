import { createMemoryHistory, createRouter } from 'vue-router'

import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

const routes = [
    { path: '/', redirect: '/news' },
    { path: '/news', component: NewsView },
    { path: '/ask', component: AskView },
    { path: '/jobs', component: JobsView },
    { path: '/item', component: ItemView },
    { path: '/user', component: UserView },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})