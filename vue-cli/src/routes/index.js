import { createMemoryHistory, createRouter } from 'vue-router'

import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import createListView from '../views/CreateListView.js';

const routes = [
    { path: '/', redirect: '/news' },
    { 
        path: '/news', 
        name: 'news', 
        component: NewsView,
        //component: createListView('NewsView'),
    },
    { 
        path: '/ask', 
        name: 'ask', 
        component: AskView,
        //component: createListView('AskView'),
    },
    { 
        path: '/jobs', 
        name: 'jobs', 
        component: JobsView,
        //component: createListView('JobsView'),
    },
    { path: '/item/:id', name: 'item', component: ItemView },
    { path: '/user/:id', name: 'user', component: UserView },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})