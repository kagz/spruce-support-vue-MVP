<template>
  <div class="addjob">
    <div class="container">
      <div class="col-md-12">
        <vuestic-widget headerText="Create a Job">
          <form @submit.prevent="onCreateJob">
            <div class="row">
              <div class="col-md-6">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input v-model="title" id="simple-input" required />
                      <label class="control-label" for="simple-input">Job Title</label>
                      <i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" v-model="staffs" required />
                      <label class="control-label" for="simple-input">Staffs Needed</label>
                      <i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input v-model="location" id="simple-input" required />
                      <label class="control-label" for="simple-input">Location</label>
                      <i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <textarea v-model="jobdescription" type="text" id="simple-textarea" required></textarea>
                      <label class="control-label" for="simple-textarea">Job Description</label>
                      <i class="bar"></i>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div class="col-md-6">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input v-model="clientname" id="simple-input" required />
                      <label class="control-label" for="simple-input">Client's Name</label>
                      <i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <vuestic-date-picker
                        required
                        id="date-picker-time"
                        :config="{enableTime: true}"
                        v-model="datepicker.time"
                      />
                      <!-- <label class="control-label" for="date-picker-time">Starting Time</label> -->
                      <i class="bar"></i>
                    </div>
                  </div>

                  <vuestic-file-upload
                    type="single"
                    :file-types="'.png, .jpg, .jpeg'"
                    id="file"
                    ref="file"
                    v-on:change="handleFileUpload()"
                  />
                </fieldset>
              </div>
            </div>
            <div class="col-sm-6 col-lg-6 col-xl-3 d-flex justify-content-center">
              <button class="btn btn-dark" :disabled="!formIsValid" type="submit">post job</button>
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
  name: "addjob",

  data() {
    return {
      title: "",
      location: "",
      clientname: "",
      jobdescription: "",
      imageUrl: "",
      imagePath: "",
      staffs: 1,
      file: "",
      datepicker: {
        time: Date.now()
      }
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },

    // clear(field) {
    //   this[field] = "";
    // },

    async onCreateJob() {
      if (!this.formIsValid) {
        return;
      }
      let formData = new FormData();
      formData.append("file", this.file);


//  axios.defaults.headers = {
//         // 'Content-Type': 'application/json',
//        "Access-Control-Allow-Origin": "*"
//     }


      await axios
        .post(
          'https://us-central1-kamagera-aa372.cloudfunctions.net/storeImage',
          formData,
  {
    
    headers: {
         'Access-Control-Allow-Origin': true,
         crossorigin:true,
          xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
    }
 
  }



        )
       .then( resp => {
        this.imagePath = resp.imagePath,
        this.imageUrl = resp.imageUrl
			})
        .catch(() => {
          console.log("FAILURE!!");
        });

      const jobData = {
        title: this.title,
        location: this.location,
        clientname: this.clientname,
        staffs: this.staffs,
        imagePath: this.imagePath,
        imageUrl: this.imageUrl,
        jobdescription: this.jobdescription,
        date: this.datepicker.time
      };
      this.$store.dispatch("createJob", jobData);
      this.$router.push("/admin/dashboard");
    },

    onFilePicked(event) {}
  },

  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.clientname !== "" &&
        this.jobdescription !== ""
      );
    }
  }
};
</script>
