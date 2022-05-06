const comments = {
    actions: {
        GET_COMMENTS({commit}, id) {
            return new Promise((resolve) => {
                axios.get(`/api/comment`).then(response => {
                    if(response.data.result) {
                        resolve(response.data.comments);
                        commit('SET_COMMENTS', response.data.comments);
                    }
                });
            });
        },
    },
    mutations: {
        SET_COMMENTS(state, data) {
            state.comments = data;
        },
    },
    state: {
        comments: []
    },
    getters: {
        getComments: state => state.comments,
    }
}

export default comments;