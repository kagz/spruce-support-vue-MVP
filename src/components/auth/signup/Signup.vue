<template>
  <div class="signup">
    <div>
      <!-- <div v-if="error">
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </div> -->

      <div>
        <h1 class="logo-name">Spruce</h1>
      </div>
      <form @submit.prevent="onSignup">
            <div class="form-group">
          <div class="input-group">
            <input name="name" id="name" v-model="name" type="name" required />
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

        <div
          class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container"
        >
          <button class="btn btn-dark" type="submit">Sign up</button>
          <router-link class="link" :to="{name: 'login'}">Has an account?</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { fb, db } from '../../../firebase'
export default {
  name: 'signup',
  data () {
    return {
      message: null,
      name: null,
      email: null,
      password: null
    }
  },

  created () {
    fb.auth().signOut()
  },

  methods: {
    onSignup () {
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          db.collection('profiles')
            .doc(user.user.uid)
            .set({
              name: this.name
            })
            .then(() => {
              console.log('Document successfully written!')
            })
            .catch(error => {
              console.error('Error writing document: ', error)
            })

          this.$router.replace('/admin/dashbord')
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // eslint-disable-next-line eqeqeq
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.')
          } else {
            alert(errorMessage)
          }
          console.log(error)
        })
    }
  }
}
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
