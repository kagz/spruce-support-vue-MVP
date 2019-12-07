<template>
  <div class="collapse-page row">
    <div class="container">
      <vuestic-widget headerText="My Posted Jobs">
        <div class="spinner-border" v-if="loading" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div v-if="error">
          <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
        </div>

        <vuestic-accordion v-for="job in jobs.slice().reverse()" :key="job.id">
          <div class="jobscard">
            <vuestic-collapse>
              <span slot="header">
                <div class="col-sm-6 col-lg-6 col-xl-3 d-flex">
                  <div style="margin-right:15px ; color:black; justify-content: space-between">
                    <i class="glyphicon glyphicon-briefcase" style="color:green"></i>
                    {{job.title}}
                  </div>
                  <!-- <div style="color:black">
                    <i class="fa fa-users" style="color:red"></i>
                    {{job.staffs}}
                  </div>-->
                </div>
              </span>
              <div slot="body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="collapse-page__content">
                      <div class="row">
                        <div class="collapse-page__content__title btn-with-icon-content">
                          <i class="fa fa-users" style="color:red; margin-right:5px"></i>
                          {{job.staffs}}
                        </div>

                        <div
                          class="collapse-page__content__title btn-with-icon-content"
                          style="margin-left:10px"
                        >
                          <i
                            class="icon glyphicon glyphicon-map-marker"
                            style="color:red; margin-left:5px"
                          ></i>
                          {{job.location}}
                        </div>
                      </div>

                      <div class="time" style="margin:15px">
                        <i class="glyphicon glyphicon-calendar" style="color:red; margin-right:5px"></i>
                        {{job.date | date}}
                      </div>

                      <!-- <h4 class="collapse-page__content__title">{{job.time}}</h4> -->
                      <div
                        style=" font-size: 1.375rem;
      font-weight: bold;"
                      >{{ job.description}} .</div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-12 col-xl-12 d-flex downthere">
                    <div v-if="userIsAuthenticated && !userIsCreator &&!userIsRegistered"  style="margin-left:10px">
                      <a
                        @click="onLiking(job)"
                        class="btn btn-with-icon btn-dark btn-micro rounded-icon my-2 my-sm-0"
                      >
                        <i class="fa fa-eye"></i>
                      </a>
                    </div>
                    <div    v-if="userIsAuthenticated && userIsCreator" style="margin-right:10px">
                      <a class="btn btn-with-icon btn-success btn-micro rounded-icon my-2 my-sm-0">
                        <i class="fa fa-pencil"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </vuestic-collapse>
          </div>
        </vuestic-accordion>
      </vuestic-widget>
    </div>
    <div class="col-md-12"></div>
  </div>
</template>

<script>
export default {
  name: "viewjobs",

  computed: {
    jobs() {
      return this.$store.getters.loadedJobs;
    },
 jobo () {
        return this.$store.getters.loadedJob(this.id)
         
      },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.isLoading;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    userIsCreator() {
      if (!this.userIsAuthenticated) {
        return false;
      }
      //return this.$store.getters.user.id === this.job.userId;
      console.log(this.jobo)
    },
    loading() {
      return this.$store.getters.loading;
    },
    userIsRegistered(job) {
      return (
        this.$store.getters.user.registeredJobs.findIndex(id => {
          return id === this.jobId;
        }) >= 0
      );
    }
  },
  methods: {
    onLiking(job) {
      {
        this.$store.dispatch("registerUserForJob", job.id);
        Toast.fire({
          type: "success",
          title: "Job Booking  successfull"
        });
      }
    }
  }
};
</script>

<style lang="scss">
.jobscard {
  padding: 10px;
}
.time {
  color: rgb(8, 126, 24);
}
.downthere {
  justify-content: space-between;
  // padding: 20px;
}
.collapse-page {
  &__content {
    padding: 2rem;
    &__title {
      font-size: 1.375rem;
      font-weight: bold;
    }
  }
}
</style>
