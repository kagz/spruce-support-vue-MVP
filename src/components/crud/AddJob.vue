<template>
  <div class="addjob">
    <div class="container">
      <div class="col-md-12">
        <vuestic-widget headerText="Create a Job">
          <div class="spinner-border" v-if="loading" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div v-if="error">
            <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
          </div>

          <form @submit.prevent="onCreateJob">
            <div class="row">
              <div class="col-md-6">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input v-model="title" id="title" required />
                      <label class="control-label" for="title">Job Title</label>
                      <i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input id="staffs" v-model="staffs" required />
                      <label class="control-label" for="staffs">Staffs Needed</label>
                      <i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input v-model="location" id="location" required />
                      <label class="control-label" for="location">Location</label>
                      <i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <textarea v-model="description" type="text" id="simple-textarea" required></textarea>
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

                  <div class="input-group" style="margin:10px">
                    <input type="file" id="file" ref="file" v-on:change="onChangeFileUpload()" />
                  </div>
                  <div></div>
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
import axios from 'axios'
import { db } from '../../firebase'
export default {
  name: 'addjob',

  data () {
    return {
      title: '',
      location: '',
      clientname: '',
      description: '',
      imageUrl: '',
      imagePath: '',
      file: '',
      pic: '',
      staffs: 1,

      datepicker: {
        time: Date.now()
      }
    }
  },

  firestore () {
    return {
      createdjobs: db.collection('createdjobs'),
    }
  },
  methods: {
    onPickFile () {
      this.$refs.file.click()
    },
    onChangeFileUpload () {
      this.file = this.$refs.file.files[0]
    },

    async onCreateJob () {
      if (!this.formIsValid) {
        return
      }

      let formData = new FormData()
      formData.append('file', this.file)

      await axios
        .post(
          'https://us-central1-kamagera-aa372.cloudfunctions.net/storeImage',
          formData,
          {
            headers: {
              'Access-Control-Allow-Origin': true,
              crossorigin: true
            }
          }
        )
        .then(resp => {
          // console.log(resp.data)
          // (this.imagePath = resp.imagePath), (this.imageUrl = resp.imageUrl);
          console.log('image url returned' + resp.data.imageUrl)
          try {
            let jobData = {
              title: this.title,
              location: this.location,
              clientname: this.clientname,
              staffs: this.staffs,
              imagePath: resp.data.imagePath,
              imageUrl: resp.data.imageUrl,
              description: this.description,
              date: this.datepicker.time
            }
            this.$firestore.createdjobs.add(jobData)

            // eslint-disable-next-line no-undef
            Toast.fire({
              type: 'success',
              title: 'new job posted successfully'
            })
            this.$router.push('/admin/dashboard')
          } catch (err) {
            console.log(err)
          }
        })

        .catch(() => {
          console.log('FAILURE!!')
        })
    }
  },

  computed: {
    formIsValid () {
      return (
        this.title !== '' &&
        this.location !== '' &&
        this.clientname !== '' &&
        this.description !== '' &&
        this.file !== ''
      )
    },

    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.isLoading
    }
  }
}
</script>
