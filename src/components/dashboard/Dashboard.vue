<template>
  <div class="dashboard">
    <div class="auth-wallpaper col-12">
      <div class="oblique"></div>
      <div class="auth-wallpaper__logo">
        <div class="title" style="margin-top:10px"> Spruce

           Support  </div>
        <div style="margin-top:30%">

            <h5 style="color:red; " >
             Logged as:  {{profile.name}}
          </h5>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { fb, db } from '../../firebase'
export default {
  name: 'dashboard',

  data () {
    return {
      fullname: null,
      email: null,
    }
  },

  firestore () {
    const user = fb.auth().currentUser
    return {
      profile: db.collection('profiles').doc(user.uid),

    }
  },

  computed: {

  }

}

</script>
<style lang="scss" scoped>
  .dashboard {
    height: calc(100vh - #{$top-nav-height});
    .auth-wallpaper {
      height: 100%;
      background-color: $vue-darkest-blue;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      &__logo {
        z-index: 2;
        width: 100%;
      }
      .auth-wallpaper__logo {
        text-align: center;
        .title {
          font-size: 64px;
          font-weight: bold;
          letter-spacing: 3px;
          color: $vue-blue;
        }
        .desc {
          font-size: 18px;
          color: $light-gray;
        }
      }
      .oblique {
        position: absolute;
        background-color: $auth-wallpaper-oblique-line;
        left: calc(50% - 15%/2);
        transform: rotate(15deg);
        width: 15%;
        height: 115vh;
      }
    }
  }

</style>
