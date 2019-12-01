<template>
  <div class="collapse-page row">
    <div class="container">
      <vuestic-widget headerText="My Posted Jobs">
        <vuestic-accordion v-for="job in jobs.slice().reverse()" :key="job.id">
          <div class="jobscard">
            <vuestic-collapse>
              <span slot="header">
                <div class="col-sm-6 col-lg-6 col-xl-3 d-flex">
                  <div style="margin-right:15px ; color:black; justify-content: space-between">
                    <i class="fa fa-user-md" style="color:red"></i>
                    {{job.title}}
                  </div>
                  <div style="color:black">
                    <i class="fa fa-users" style="color:red"></i>
                    {{job.staffs}}
                  </div>
                </div>
              </span>
              <div slot="body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="collapse-page__content">
                      <div class="collapse-page__content__title btn-with-icon-content">
                        <i class="fa fa-map-pin" style="color:red"></i>
                        {{job.location}}
                      </div>

                      <div class="time" style="margin-bottom:10px">
                        <i class="fas fa-calendar-check-o" style="color:red"></i>
                        {{job.date | date}}
                      </div>

                      <!-- <h4 class="collapse-page__content__title">{{job.time}}</h4> -->
                      <div>{{ job.description}} .</div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-12 col-xl-12 d-flex downthere">
                    <!-- <button class="btn btn-primary btn-micro btn-with-icon rounded-icon">
                      <div class=" btn-with-icon-content">
                        <i class="fa fa-thumbs-up" ></i>
                      </div>
                    </button> -->
 <div>
                      <a class="btn btn-with-icon btn-dark btn-micro rounded-icon my-2 my-sm-0">
                        <i class="fa fa-thumbs-up" ></i>
                      </a>
                    </div>
                    <div>
                      <a class="btn btn-with-icon btn-success btn-micro rounded-icon my-2 my-sm-0">
                        <i class="fa fa-pencil" ></i>
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
