<template>
  <div class="addclient">
    <div class="container">
      <div class="col-md-12">
        <vuestic-widget headerText="Add a Client & Company">
          <form>
            <div class="row">
              <div class="col-md-6">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" required />
                      <label class="control-label" for="simple-input">Client or Company Name</label>
                      <i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" required />
                      <label class="control-label" for="simple-input">Location</label>
                      <i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" required />
                      <label class="control-label" for="simple-input">Email</label>
                      <i class="bar"></i>
                    </div>
                  </div>

              
                </fieldset>
              </div>

              <div class="col-md-6">
     <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" required />
                      <label class="control-label" for="simple-input">Phone Number</label>
                      <i class="bar"></i>
                    </div>
                  </div>



                <fieldset>
               <div>
                Attach logo
               </div>

              

                
                    <vuestic-file-upload
                      type="gallery"
                      :file-types="'.png, .jpg, .jpeg'"
                     
                    />
                
                </fieldset>
              </div>
            </div>
            <div class="col-sm-6 col-lg-6 col-xl-3 d-flex justify-content-center">
              <button class="btn btn-dark">Create Client</button>
            </div>
          </form>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "addclient",
  computed: {
   
  },
  data() {
    return {
    
      clearableText: "",
     
   
    
    };
  },
  methods: {
    clear(field) {
      this[field] = "";
    }
  },
  created() {
    this.$nextTick(() => {
      this.$validator.validateAll();
    });
  }
};
</script>
