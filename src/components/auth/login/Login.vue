<template>
  <div class="login">
    <div>
      <div v-if="error">
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </div>

      <div>
        <h1 class="logo-name">Spruce</h1>
      </div>
      <form @submit.prevent="onSignin">
        <div class="form-group">
          <div class="input-group">
            <input
              name="email"
              label="Mail"
              id="email"
              v-model="email"
              type="email"
              required="required"
            />
            <label class="control-label" for="email">{{'auth.email' | translate}}</label>
            <i class="bar"></i>
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <input
              required="required"
              name="password"
              label="Password"
              id="password"
              v-model="password"
              type="password"
            />
            <label class="control-label" for="password">{{'auth.password' | translate}}</label>
            <i class="bar"></i>
          </div>
        </div>

        <div
          class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container"
        >
          <button class="btn btn-dark" type="submit">
            Login
            <div class="spinner-border" v-if="loading" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </button>
          <router-link class="link" :to="{name: 'signup'}">Register an account?</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      name: null,
      email: null,
      password: null
    };
  },
    created () {
      this.onLogout()
    },
  computed: {
    user() {
      return this.$store.getters.user;
    },

    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.isLoading;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/admin/dashboard");
      }
    }
  },
  methods: {
    onSignin() {
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password
      });
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    },
       onLogout () {
        this.$store.dispatch('logout')
      }
  }
};
</script>

<style lang="scss">
.login {
  @include media-breakpoint-down(md) {
    width: 100%;
    padding-right: 2rem;
    padding-left: 2rem;
    .down-container {
      .link {
        margin-top: 2rem;
      }
    }
  }
  .logo-name {
    color: #e6e6e6;
    font-size: 100px;
    font-weight: 800;
    letter-spacing: -10px;
    margin-bottom: 50px;
  }
  h2 {
    text-align: center;
  }
  width: 21.375rem;

  .down-container {
    margin-top: 3.125rem;
  }
}
</style>
