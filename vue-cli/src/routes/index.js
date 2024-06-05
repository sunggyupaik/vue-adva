import { createMemoryHistory, createRouter } from 'vue-router'

import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import createListView from '../views/CreateListView.js';
import { store } from '../store/index.js';

const routes = [
    { path: '/', redirect: '/news' },
    { 
        path: '/news', 
        name: 'news', 
        component: NewsView,
        //component: createListView('NewsView'),
        beforeEnter: (to, from, next) => {
            store.commit('SET_LOADING', true);

            setTimeout(() => {
                store.dispatch('FETCH_LIST', to.name)
                .then(() => next())
                .catch(error => {
                    console.log(error);
                })
            }, 1000);
        }
    },
    { 
        path: '/ask', 
        name: 'ask', 
        component: AskView,
        //component: createListView('AskView'),
        beforeEnter: (to, from, next) => {
            store.commit('SET_LOADING', true);

            setTimeout(() => {
                store.dispatch('FETCH_LIST', to.name)
                .then(() => next())
                .catch(error => {
                    console.log(error);
                })
            }, 1000);
        }
    },
    { 
        path: '/jobs', 
        name: 'jobs', 
        component: JobsView,
        //component: createListView('JobsView'),
        beforeEnter: (to, from, next) => {
            store.commit('SET_LOADING', true);

            setTimeout(() => {
                store.dispatch('FETCH_LIST', to.name)
                .then(() => next())
                .catch(error => {
                    console.log(error);
                })
            }, 1000);
        }
    },
    { path: '/item/:id', name: 'item', component: ItemView },
    { path: '/user/:id', name: 'user', component: UserView },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})