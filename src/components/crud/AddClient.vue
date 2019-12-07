<template>
  <div class="addclient">
    <div class="container">
      <div class="col-md-12">
        <vuestic-widget headerText="Add a Client or Company">
          <div class="spinner-border" v-if="loading" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div v-if="error">
            <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
          </div>

          <form @submit.prevent="onCreateCompany">
            <div class="row">
              <div class="col-md-6">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="companyname" v-model="companyname" required />
                      <label class="control-label" for="companyname">Company or Company Name</label>
                      <i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input id="location" v-model="location" required />
                      <label class="control-label" for="location">Location</label>
                      <i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input id="email" v-model="email" required />
                      <label class="control-label" for="email">Email</label>
                      <i class="bar"></i>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <div class="input-group">
                    <input id="phone" v-model="phone" required />
                    <label class="control-label" for="phone">Phone Number</label>
                    <i class="bar"></i>
                  </div>
                </div>

                <div class="form-group">
                  <div class="input-group">
                    <input id="companytype" v-model="companytype" required />
                    <label class="control-label" for="companytype">Type of company</label>
                    <i class="bar"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-6 col-xl-3 d-flex justify-content-center">
              <button class="btn btn-dark" :disabled="!formIsValid" type="submit">Create Company</button>
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
    formIsValid() {
      return (
        this.companyname !== "" &&
        this.location !== "" &&
        this.email !== "" &&
        this.phone !== "" &&
        this.companytype !== ""
      );
    },

    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.isLoading;
    }
  },
  data() {
    return {
      companyname: "",
      location: "",
      email: "",
      phone: "",
      companytype: ""
    };
  },
  methods: {
    async onCreateCompany() {
      if (!this.formIsValid) {
        return;
      }
      try {
        let clientData = {
          companyname: this.companyname,
          location: this.location,
          email: this.email,
          phone: this.phone,

          companytype: this.companytype
        };
        this.$store.dispatch("createCompany", clientData);
         Toast.fire({
            type: 'success',
            title: 'client created  successfully'
          })
        this.$router.push("/admin/dashboard");
      } catch (err) {
        console.log(err);
      }
    }
  },
  created() {}
};
</script>
