<template>
  <div class="newprofile">
    <div class="container">
      <div class="col-md-12">
        <vuestic-widget headerText="Update Profile">
          <!-- <div>{{ userIsAuthenticated ? 'Update Profile' : 'Register Profile' }}</div> -->
          <div>

          </div>
          <form @submit.prevent="onCreateProfile">
            <div class="row">
              <div class="col-md-6">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input  v-model="profile.fullname" required />
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

                  <!-- <div class="form-group">
                    <div class="input-group">
                      <input id="email" v-model="profile.email" required />
                      <label class="control-label" for="simple-input">Email</label>
                      <i class="bar"></i>
                    </div>
                  </div> -->
                </fieldset>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <div class="input-group">
                    <input id="passport" v-model="profile.passport" required />
                    <label class="control-label" for="simple-input">Passport Number</label>
                    <i class="bar"></i>
                  </div>
                </div>

                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input  v-model="profile.phone" required />
                      <label class="control-label" for="simple-input">Phone Number</label>
                      <i class="bar"></i>
                    </div>
                  </div>
                  <div class="input-group" style="margin:10px">
                    <input type="file" ref="file" v-on:change="onChangeFileUpload()" />
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

import { fb, db } from '../../firebase'
import axios from 'axios'
export default {
  name: 'newprofile',
  state: {
    user: null
  },
  data () {
    return {
      profile: {
        fullname: null,
        phone: null,
        passport: null,
        // email: '',
        file: ''
      }
    }
  },

  computed: {
    formIsValid () {
      return (
        this.fullname !== '' &&
        this.phone !== '' &&
        // this.secondname !== "" &&
        this.passport !== '' &&
        this.email !== '' &&
        this.file !== ''
      )
    },

    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.isLoading
    }
  },
  firestore () {
    const user = fb.auth().currentUser
    return {
      profile: db.collection('profiles').doc(user.uid),
    }
  },
  methods: {
    onPickFile () {
      this.$refs.file.click()
    },
    onChangeFileUpload () {
      this.file = this.$refs.file.files[0]
    },

    async onCreateProfile () {
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
          try {
            let profileData = {
              fullname: this.fullname,
              phone: this.phone,
              passport: this.passport,
              // email: this.email,
              imagePath: resp.data.imagePath,
              imageUrl: resp.data.imageUrl,
              // userId: this.profile.id,
              created: Date.now()
            }
            this.$firestore.profile.update(profileData)
            this.$router.push('/admin/dashboard')

            // eslint-disable-next-line no-undef
            Toast.fire({
              type: 'success',
              title: 'new Profile posted successfully'
            })
          } catch (err) {
            console.log(err)
          }

          // console.log(resp.data);
        })

        .catch(() => {
          console.log('FAILURE!!')
        })
    }
  }
}
</script>
