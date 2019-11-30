<template>
  <div class="collapse-page row">
    <div class="container">
      <vuestic-widget headerText="My Posted Jobs">
        <vuestic-accordion v-for="job in jobs" :key="job.id">
          <div class="jobscard">
            <vuestic-collapse>
              <span slot="header">
                <div class="col-sm-6 col-lg-6 col-xl-3 d-flex">
                  <div style="margin-right:15px ; justify-content: space-between">
                    <i class="fa fa-user-md"></i>
                    {{job.title}}
                  </div>
                  <div>
                    <i class="fa fa-users"></i>
                    {{job.staffs}}
                  </div>
                </div>
              </span>
              <div slot="body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="collapse-page__content">
                      <div class="collapse-page__content__title btn-with-icon-content">
                        <i class="fa fa-map-pin"></i>
                        {{job.location}}
                      </div>

                      <div class="time" style="margin-bottom:10px">
                        <i class="fas fa-calendar-check-o"></i>
                        {{job.date | date}}
                      </div>

                      <!-- <h4 class="collapse-page__content__title">{{job.time}}</h4> -->
                      <div>{{ job.description}} .</div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-12 col-xl-12 d-flex downthere">
                    <button class="btn btn-primary btn-micro btn-with-icon rounded-icon">
                      <div class="btn-with-icon-content">
                        <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                      </div>
                    </button>

                    <div>
                      <a class="btn btn-with-icon btn-success btn-micro rounded-icon my-2 my-sm-0">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
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
    }
  }
};
</script>

<style lang="scss">
.jobscard {
  padding: 10px;
}
.time{
  color:aqua;
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
