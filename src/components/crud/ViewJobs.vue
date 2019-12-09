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
              <div slot="body" style="padding:10px">
                <div class="container col-md-12 d-flex flex-column align-items-center">
                  <div class="vuestic-profile-card d-flex flex-column align-items-center">
                    <div class="photo">
                      <img :src="job.imageUrl" />
                    </div>
                    <h5 class="name">required {{job.staffs}} staffs</h5>
                    <span class="location">
                      <span style="color:red" class="icon glyphicon glyphicon-map-marker"></span>
                      {{job.location}}
                    </span>

                    <div>
                      <div
                        style=" font-size: 1.375rem;
                           font-weight: bold;"
                      >{{ job.description}}</div>
                    </div>

                    <div class="social">
                      <div class="row" style="margin-right:15px">
                        <i
                          class="icon glyphicon glyphicon-calendar"
                          style="color:red; margin-right:5px"
                        ></i>
                      <div class="time">
                          {{job.date | date}}
                      </div>
                      </div>

                      <!-- <div class="row" style="margin-right:15px">
                        <i
                          class="icon glyphicon glyphicon-user"
                          style="color:red; margin-right:5px"
                        ></i>
                        <div>
                          {{job.staffs}}
                        </div>
                      </div> -->
                    </div>
                  </div>
                </div>

                <!-- 
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
                -->
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
    jobo() {
      return this.$store.getters.loadedJob(this.id);
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
      console.log(this.jobo);
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

$vuestic-profile-card-width: 12.6875rem;
$vuestic-profile-card-photo-diameter: 9.375rem;

.vuestic-profile-card {
  width: $vuestic-profile-card-width;
  .photo {
    height: $vuestic-profile-card-photo-diameter;
    width: $vuestic-profile-card-photo-diameter;
    border-radius: 50%;
    background-color: $lighter-gray;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
    }
  }
  .name {
    margin-top: 1.325rem;
    margin-bottom: 0;
  }
  .location {
    margin-top: 0.8125rem;
    .icon {
      color: $lighter-gray;
      font-size: $font-size-larger;
    }
    &:hover {
      cursor: pointer;
      .icon {
        color: red;
      }
    }
  }
  .social {
    display: flex;
    justify-content: flex-end;
    padding-top: 1rem;
    margin-top: 1.25rem;
    width: 100%;
    border-top: solid 0.125rem $light-gray;
    .icon {
      color: $gray;
      text-decoration: none;
      font-size: $font-size-h4;
      margin-right: 0.4375rem;
      margin-left: 0.4375rem;
      &:hover {
        cursor: pointer;
        color: darken($gray, 50%);
      }
    }
  }
}
</style>
