<template>
   <div class="login">
      <div >
     <div>

                <h1 class="logo-name">Spruce </h1>

            </div>
    <form method="post" action="/auth/login" name="login">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="email" required="required"/>
          <label class="control-label" for="email">{{'auth.email' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" required="required"/>
          <label class="control-label" for="password">{{'auth.password' | translate}}</label><i class="bar"></i>
        </div>
      </div>
  
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-dark" type="submit">
         Login
        </button>
        <router-link class='link' :to="{name: 'signup'}">Register an account?</router-link>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  name: 'login',
   data(){
      return {
          name:null,
          email:null,
          password:null
      }
  },
  
  methods:{
      login(){
      },
      register(){
      }

  }
}

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
