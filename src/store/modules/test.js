const test = {
  state: {
    count: 0,
    todos: [
      { id: 1, done: true },
      { id: 2, done: true },
      { id: 3, done: false }
    ]
  },
  // 可以认为是store的计算属性
  getters: {
    doneTodos(state) {
      return state.todos.filter(item => item.done);
    },
    // getter可以接受其他getter作为参数
    doneTodosLength(state, getters) {
      return getters.doneTodos.length;
    }
  },
  mutations: {
    INCREMENT(state, data) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }, data) {
      commit('INCREMENT', data);
    }
  }
};

export default test;
