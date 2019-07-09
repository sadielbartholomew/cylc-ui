const state = {
  suites: [],
  tasks: [],
  tree: [],
  dot: []
};

const mutations = {
  SET_SUITES(state, suites) {
    state.suites = suites;
  },
  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  },
  SET_TREE(state, tree) {
    state.tree = tree;
  },
  SET_DOT(state, dot) {
    state.dot = dot;
  },
};

const actions = {
  setSuites({commit}, suites) {
    commit('SET_SUITES', suites);
  },
  setTasks({commit}, tasks) {
    commit('SET_TASKS', tasks);
  },
  setTree({commit}, tree) {
    commit('SET_TREE', tree);
  },
  setDot({commit}, dot) {
    commit('SET_DOT', dot);
  },
};

const getters = {
  suites: (state) => {
    return state.suites
  },
  tasks: (state) => {
    return state.tasks
  },
  tree: (state) => {
    return state.tree
  },
  dot: (state) => {
    return state.dot
  }
};

export const suites = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
