import authMutations from './mutations';
import authGetters from './getters';
import authActions from './actions';

export default {
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogout: false
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters
};
