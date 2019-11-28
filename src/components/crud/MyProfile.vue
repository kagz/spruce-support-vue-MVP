<template>
  <div class="myprofile">
    <div class="container">
      <div class="col-md-12">
        <vuestic-widget headerText="Update Profile">
          <form>
            <div class="row">
              <div class="col-md-6">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" required />
                      <label class="control-label" for="simple-input">First Name</label>
                      <i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" required />
                      <label class="control-label" for="simple-input">Second Name</label>
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
                      <label class="control-label" for="simple-input">Passport Number</label>
                      <i class="bar"></i>
                    </div>
                  </div>



                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" required />
                      <label class="control-label" for="simple-input">Phone Number</label>
                      <i class="bar"></i>
                    </div>
                  </div>

              

                 
                    <vuestic-file-upload
                      type="gallery"
                      :file-types="'.png, .jpg, .jpeg'"
                     
                    />
                 
                </fieldset>
              </div>
            </div>
            <div class="col-sm-6 col-lg-6 col-xl-3 d-flex justify-content-center">
              <button class="btn btn-dark">Update Profile</button>
            </div>
          </form>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "myprofile",
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
