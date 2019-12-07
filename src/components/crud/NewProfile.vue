<template>
  <div class="newprofile">
    <div class="container">
      <div class="col-md-12">
        <vuestic-widget headerText="Update Profile">
          <!-- <div>{{ userIsAuthenticated ? 'Update Profile' : 'Register Profile' }}</div> -->
          <div>
            <div class="spinner-border" v-if="loading" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div v-if="error">
              <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </div>
          </div>
          <form @submit.prevent="onCreateProfile">
            <div class="row">
              <div class="col-md-6">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="fullname" v-model="fullname" required />
                      <label class="control-label" for="simple-input">Full Name</label>
                      <i class="bar"></i>
                    </div>
                  </div>

                  <!-- <div class="form-group">
                    <div class="input-group">
                      <input id="secondname" v-model="secondname" required />
                      <label class="control-label" for="simple-input">Second Name</label>
                      <i class="bar"></i>
                    </div>
                  </div> -->

                  <div class="form-group">
                    <div class="input-group">
                      <input id="email" v-model="email" required />
                      <label class="control-label" for="simple-input">Email</label>
                      <i class="bar"></i>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <div class="input-group">
                    <input id="passport" v-model="passport" required />
                    <label class="control-label" for="simple-input">Passport Number</label>
                    <i class="bar"></i>
                  </div>
                </div>

                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="phone" v-model="phone" required />
                      <label class="control-label" for="simple-input">Phone Number</label>
                      <i class="bar"></i>
                    </div>
                  </div>
                  <div class="input-group" style="margin:10px">
                    <input type="file" id="file" ref="file" v-on:change="onChangeFileUpload()" />
                  </div>
                  <!-- <vuestic-file-upload type="gallery" :file-types="'.png, .jpg, .jpeg'" /> -->
                </fieldset>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3 col-xl-3 d-flex justify-content-center">
              <button class="btn btn-dark" :disabled="!formIsValid" type="submit">Update Profile</button>
            </div>
          </form>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
export default {
  name: "newprofile",
  state: {
    user: null
  },
  data() {
    return {
     
        fullname: "",
        phone: "",
        // secondname: "",
        passport: "",
        email: "",
        file: ""
    
    };
  },
  computed: {
    formIsValid() {
      return (
        this.fullname !== "" &&
        this.phone !== "" &&
        // this.secondname !== "" &&
        this.passport !== "" &&
        this.email !== "" &&
        this.file !== ""
      );
    },

    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.isLoading;
    }
  },

  methods: {
    onPickFile() {
      this.$refs.file.click();
    },
    onChangeFileUpload() {
      this.file = this.$refs.file.files[0];
    },

    async onCreateProfile() {
      if (!this.formIsValid) {
        return;
      }

      let formData = new FormData();
      formData.append("file", this.file);

      await axios
        .post(
          "https://us-central1-kamagera-aa372.cloudfunctions.net/storeImage",
          formData,
          {
            headers: {
              "Access-Control-Allow-Origin": true,
              crossorigin: true
            }
          }
        )
        .then(resp => {
          // console.log(resp.data)
          // (this.imagePath = resp.imagePath), (this.imageUrl = resp.imageUrl);
          console.log("image url returned" + resp.data.imageUrl);
          try {
            let profileData = {
              fullname: this.fullname,
              phone: this.phone,
              passport: this.passport,
              email: this.email,
              imagePath: resp.data.imagePath,
              imageUrl: resp.data.imageUrl,
              userId: this.$store.getters.user.userId,
              date: Date.now()
            };
            this.$store.dispatch("createProfile", profileData);
            this.$router.push("/admin/dashboard");
          } catch (err) {
            console.log(err);
          }

          // console.log(resp.data);
        })

        .catch(() => {
          console.log("FAILURE!!");
        });
    }
  }
};
</script>
