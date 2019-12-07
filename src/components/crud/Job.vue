<template>
  <div class="container">
       <vuestic-card :image="jobo.imageUrl" theme="dark">
            <p slot="title">
                {{jobo.title}}
           
                </p>
            {{jobo.description}}
          
               <p class="pt-3 mb-0">
              <button class="btn btn-primary btn-micro" >Pick job</button>
          
            </p>
          </vuestic-card>

<div>
    this is {{jobo.id}}
    {{jobo.title}}
</div>
  </div>
</template>

<script>

export default {
    props: ['id'],
  name: "job",
 // components: { VuesticCard },
  data() {
    return {
   
    //  isShown: false
    };
  },
   computed: {
       jobo () {
        return this.$store.getters.loadedJob(this.id)
         
      },
     
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      userIsCreator () {
        if (!this.userIsAuthenticated) {
          return false
        }
        return this.$store.getters.user.id === this.job.userId
      },
      loading () {
        return this.$store.getters.loading
      },
       userIsRegistered () {
        return this.$store.getters.user.registeredJobs.findIndex(id => {
          return id === this.id
        }) >= 0
      }
    
    },
  methods: {
  onAgree () {
   
        {
          this.$store.dispatch('registerUserForJob', this.id)
        }
      }
  }
};
</script>

<style lang="scss">
$singleGutter: #{(19/16)}rem;

.cards-container {
  display: flex;
  flex-wrap: wrap;
  margin: -$singleGutter;
  align-items: flex-start;
  .vuestic-card {
    margin: $singleGutter;

    width: calc(33% - #{$singleGutter} * 2);

    @include media-breakpoint-only(xl) {
      width: calc(25% - #{$singleGutter} * 2);
    }

    @include media-breakpoint-only(lg) {
      width: calc(33.3% - #{$singleGutter} * 2);
    }

    @include media-breakpoint-only(sm) {
      width: calc(50% - #{$singleGutter} * 2);
    }

    @include media-breakpoint-only(xs) {
      width: calc(100% - #{$singleGutter} * 2);
    }
  }
}

</style>
