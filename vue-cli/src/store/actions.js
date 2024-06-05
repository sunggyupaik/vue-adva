import { 
    fetchNewsList, 
    fetchJobsList, 
    fetchAskList, 
    fetchList,
    fetchUser,
    fetchCommentItem
} from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
          .then(response => {
            context.commit('SET_NEWS', response.data);
          }) 
          .catch(error => {
            console.log(error);
          })
      },
      FETCH_JOBS(context) {
        fetchJobsList()
        .then(response => {
          context.commit('SET_JOBS', response.data);
        }) 
        .catch(error => {
          console.log(error);
        })
      },
      FETCH_ASK(context) {
        fetchAskList()
        .then(response => {
          context.commit('SET_ASK', response.data);
        }) 
        .catch(error => {
          console.log(error);
        })
      },
      FETCH_USER({ commit }, username) {
        fetchUser(username)
        .then(response => {
          commit('SET_USER', response.data);
        }) 
        .catch(error => {
          console.log(error);
        })
      },
      FETCH_ITEM({ commit }, id) {
        fetchCommentItem(id)
        .then(response => {
          commit('SET_ITEM', response.data);
        })
        .catch(error => {
          console.log(error);
        })
      },
      FETCH_LIST({ commit }, pageName) {
        fetchList(pageName)
        .then(response => {
          commit('SET_LIST', response.data);
        })
        .catch(error => {
          console.log(error);
        })
      }
}