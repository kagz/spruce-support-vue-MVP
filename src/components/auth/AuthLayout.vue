<template>
  <div class="auth-layout">
 
    <div class="main row">
      <div class="auth-content col-lg-12 col-12">
        <router-view></router-view>
      </div>
  
    </div>
  </div>
</template>

<script>
import VuesticIconVuestic
  from '../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconVuestic'
export default {
  name: 'AuthLayout',
  components: { VuesticIconVuestic },
}
</script>

<style lang="scss">
  .auth-layout {
    height: 100vh;
   
    .nav {
      display: flex;
      align-items: center;
      justify-content: center;
      height: $top-mobile-nav-height;
      background-color: $top-nav-bg;
      .vuestic-icon-vuestic {
        height: $auth-mobile-nav-ivuestic-h;
        width: 100%;
      }
    }
    .main {

      height: 100%;
      .auth-content {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
      }
    }

    @include media-breakpoint-down(md) {
      .main {
        height: $auth-mobile-main-h;
        .auth-content {
          align-items: flex-start;
          padding-top: $auth-content-padding-t;
        }
      }
    }
  }
</style>
