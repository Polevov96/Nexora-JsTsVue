import { safeParse } from "../utils/storage";

export const userModules = {
  namespaced: true,

  state: {
    user: safeParse(localStorage.getItem("user"), ""),
    password: "",
    owner: "",
    ownerId: null,
    usersList: safeParse(localStorage.getItem("usersList"), []),
  },

  mutations: {
    ADD_USER: (state, payload) => {
      const user = {
        id: payload.id,
        username: payload.username,
        email: payload.email,
      };

      state.user = user;

      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },

  actions: {
    addUser: function (context, payload) {
      context.commit("ADD_USER", payload);
    },
  },
};
