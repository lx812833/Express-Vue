import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 设置vuex类型
const types = {
  SET_AUTNENTICATED: "SET_AUTNENTICATED",
  SET_USER: "SET_USER"
}

const state = {
  isAutnenticated: false, // 是否授权
  user: {},
}

const getters = {
  isAutnenticated: state => state.isAutnenticated,
  user: state => state.user
}

const mutations = {
  [types.SET_AUTNENTICATED](state, isAutnenticated) {
    if (isAutnenticated) state.isAutnenticated = isAutnenticated;
    else state.isAutnenticated = false;
  },
  [types.SET_USER](state, user) {
    if (user) state.user = user;
    else state.user = {};
  }
}

const actions = {
  setAutnenticated: ({ commit }, isAutnenticated) => {
    commit(types.SET_AUTNENTICATED, isAutnenticated)
  },
  setUser: ({ commit }, user) => {
    commit(types.SET_USER, user)
  },
  // 退出清楚当前状态
  clearCurrentState: ({ commit }) => {
    commit(types.SET_AUTNENTICATED, false);
    commit(types.SET_USER, null);
  },
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
