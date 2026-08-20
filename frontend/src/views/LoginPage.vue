<template>
  <PageLayout :useHeader="false">
    <template v-slot:content>
      <div class="home">
        <form class="login" @submit.prevent="login">
          <p v-if="loginError" class="login-error">
            {{ loginError }}
          </p>
          <label for="username">Имя пользователя</label>
          <input
            id="username"
            required
            v-model="username"
            type="text"
            placeholder="Введите имя пользователя"
          />
          <label for="password">Пароль</label>
          <input
            id="password"
            required
            v-model="password"
            type="password"
            placeholder="Введите пароль"
          />
          <hr />
          <button type="submit">Login</button>
        </form>
      </div>
    </template>
  </PageLayout>
</template>

<script>
import PageLayout from "@/components/layout/PageLayout.vue";
import { getUser } from "../api";

export default {
  name: "LoginPage",
  components: {
    PageLayout,
  },
  data: function () {
    return {
      username: "",
      password: "",
      loginError: "",
    };
  },
  methods: {
    login: async function () {
      this.loginError = "";
      if (!this.username) {
        alert("не заполненые данные");
        return;
      }

      if (!this.password) {
        alert("не заполненые данные");
        return;
      }

      try {
        const allUsers = await getUser();

        const result = allUsers.find((user) => {
          return (
            this.username === user.username && this.password === user.password
          );
        });

        if (result) {
          this.$store.dispatch("userModules/addUser", result);
          this.$router.push("/tasklist");
        } else {
          this.loginError =
            "неверно имя пользователя или пароль учетной записи";

          console.log("loginError:", this.loginError);
        }
      } catch (err) {
        console.log(err);
        alert("Ошибка при получении пользователей");
      }
    },
  },
};
</script>

<style>
.home {
  min-height: 100vh;
  min-height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 24px;
  box-sizing: border-box;
  background: repeating-linear-gradient(
      to right,
      rgba(255, 255, 255, 0.06) 0,
      rgba(255, 255, 255, 0.06) 1px,
      transparent 1px,
      transparent 48px
    ),
    radial-gradient(
      circle at 50% 45%,
      rgba(115, 72, 160, 0.22),
      transparent 38%
    ),
    radial-gradient(
      circle at 50% 45%,
      rgba(255, 255, 255, 0.06),
      transparent 28%
    ),
    radial-gradient(circle at 0% 25%, rgba(255, 106, 0, 0.42), transparent 34%),
    radial-gradient(
      circle at 100% 80%,
      rgba(255, 106, 0, 0.34),
      transparent 32%
    ),
    #101014;
}

.login {
  width: 100%;
  max-width: 440px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: clamp(20px, 5vw, 32px);
  box-sizing: border-box;

  background: rgba(18, 18, 20, 0.76);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  backdrop-filter: blur(32px) saturate(120%);
}
.login label {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.72);
}
.login input {
  width: 100%;
  box-sizing: border-box;
  padding: 14px 16px;

  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;

  color: #ffffff;
}
.login input::placeholder {
  color: rgba(255, 255, 255, 0.38);
}
.login input:focus {
  border-color: rgba(255, 132, 0, 0.7);
  outline: 2px solid rgba(255, 132, 0, 0.3);
  outline-offset: 2px;
}
.login input:focus-visible {
  outline: 2px solid rgba(255, 132, 0, 0.3);
  outline-offset: 2px;
}

.login button {
  width: 100%;
  box-sizing: border-box;
  padding: 14px 16px;

  border: 1px solid rgba(255, 132, 0, 0.55);
  border-radius: 12px;

  background: rgba(255, 132, 0, 0.14);
  color: #ffffff;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
}
.login button:hover {
  background: rgba(255, 132, 0, 0.24);
  border-color: rgba(255, 132, 0, 0.85);
}
.login button:active {
  transform: translateY(1px);
}
.login button:focus-visible {
  outline: 2px solid rgba(255, 132, 0, 0.35);
  outline-offset: 2px;
}
.login-error {
  color: rgba(255, 110, 110, 0.95);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  margin: -4px 0 0;
}
</style>
