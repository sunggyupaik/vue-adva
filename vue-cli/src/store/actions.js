import { 
    fetchNewsList, 
    fetchJobsList, 
    fetchAskList, 
    fetchList,
    fetchUser,
    fetchCommentItem
} from '../api/index.js';

export default {
    async FETCH_NEWS(context) {
      try {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
      } catch(error) {
        console.log(error);
      }
    },
    async FETCH_JOBS(context) {
      try {
        const response = await fetchJobsList();
        context.commit('SET_JOBS', response.data);
        return response;
      } catch(error) {
        console.log(error);
      }

    },
    async FETCH_ASK(context) {
      try {
        const response = await fetchAskList();
        context.commit('SET_ASK', response.data);
        return response;
      } catch(error) {
        console.log(error);
      }

    },
    async FETCH_USER({ commit }, username) {
      try {
        const response = await fetchUser(username);
        commit('SET_USER', response.data);
        return response;
      } catch(error) {
        console.log(error);
      }

    },
    async FETCH_ITEM({ commit }, id) {
      try {
        const response = await fetchCommentItem(id);      
        commit('SET_ITEM', response.data);
        return response;
      } catch(error) {
        console.log(error);
      }
    },
    async FETCH_LIST({ commit }, pageName) {
      try {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
      } catch(error) {
        console.log(error);
      }
    }
}