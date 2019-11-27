<template>
  <div class="collapse-page row">
    <div class="container">
      <vuestic-widget headerText="My Posted Jobs">
        <vuestic-accordion>
          <vuestic-collapse>
            <span slot="header">Expand This Block</span>
            <div slot="body">
              <div class="row">
                <div class="col-md-12">
                  <div class="collapse-page__content">
                    <h4 class="collapse-page__content__title">February 2018</h4>
                    <div>
                      The unique stripes of zebras make them one of the animals
                      most familiar to people. They occur in a variety of habitats,
                      such as grasslands, savannas, woodlands, thorny scrublands.
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-6 col-xl-3 d-flex justify-content-center">
                 
                    <button class="btn btn-dark btn-micro btn-with-icon rounded-icon">
                      <div class="btn-with-icon-content">
                        <i class="ion-md-heart ion"></i>
                      </div>
                    </button>

                    <!-- <button class="btn btn-success btn-with-icon btn-micro rounded-icon">
                      <div class="btn-with-icon-content">
                        <i class="ion-md-pencil ion"></i>
                      </div>
                    </button>

                    <button class="btn btn-danger btn-micro btn-with-icon rounded-icon">
                      <div class="btn-with-icon-content">
                        <i class="ion-md-close ion"></i>
                      </div>
                    </button> -->
                 
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
