<template>
  <div class="collapse-page row">
    <div class="container">
      <vuestic-widget headerText="My Posted Jobs">
        <vuestic-accordion>
          <vuestic-collapse>
            <span slot="header">View This Job</span>
            <div slot="body">
              <div class="row">
                <div class="col-md-12">
                  <div class="collapse-page__content">
                    <h4 class="collapse-page__content__title">February 2018</h4>
                      <h4 class="collapse-page__content__title">Home</h4>
                        <h4 class="collapse-page__content__title">4:20</h4>
                    <div>
                      The unique stripes of zebras make them one of the animals
                      most familiar to people. They occur in a variety of habitats,
                      such as grasslands, savannas, woodlands, thorny scrublands.
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-6 col-xl-3 d-flex downthere">
                 
                    <button class="btn btn-dark btn-micro btn-with-icon rounded-icon">
                      <div class="btn-with-icon-content">
                        <i class="fa fa-heart" aria-hidden="true"></i>
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
        </vuestic-accordion>
      </vuestic-widget>
    </div>
    <div class="col-md-12"></div>
  </div>
</template>

<script>
export default {
  name: "viewjobs"
};
</script>

<style lang="scss">

.downthere {
 
  justify-content: space-between;
padding: 20px;
}
.collapse-page {
  &__content {
    padding: 2rem;
    &__title {
      font-size: 1.375rem;
      font-weight: bold;
    }
    &__description {
    }
  }
}
</style>
