<template>
  <div class="signup">
    <div>
      <div v-if="error">
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </div>

      <div>
        <h1 class="logo-name">Spruce</h1>
      </div>
      <form @submit.prevent="onSignup">
        <div class="form-group">
          <div class="input-group">
            <input type="text" id="name" required="required" v-model="name" />
            <label class="control-label" for="name">Full Name</label>
            <i class="bar"></i>
          </div>
        </div>

        <div class="form-group">
          <div class="input-group">
            <input name="email" id="email" v-model="email" type="email" required />
            <label class="control-label" for="email">{{'auth.email' | translate}}</label>
            <i class="bar"></i>
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <input name="password" id="password" v-model="password" type="password" required />
            <label class="control-label" for="password">{{'auth.password' | translate}}</label>
            <i class="bar"></i>
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <input
              name="confirmPassword"
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              :rules="[comparePasswords]"
            />
            <label class="control-label" for="password">confirm password</label>
            <i class="bar"></i>
          </div>
        </div>
        <div
          class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container"
        >
          <button class="btn btn-dark" type="submit" :disabled="loading" :loading="loading">
            Sign up
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </button>
          <router-link class="link" :to="{name: 'login'}">Has an account?</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      message: null,
      name: null,
      email: null,
      password: null,
      confirmPassword: null
    };
  },

  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : "";
    },
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
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
    onSignup() {
      this.$store.dispatch("signUserUp", {
        email: this.email,
        password: this.password,
        name: this.name
      });
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    }
  }
};
</script>

<style lang="scss">
.signup {
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
