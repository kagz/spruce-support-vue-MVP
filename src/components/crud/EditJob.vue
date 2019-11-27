<template>
  <div class="editjob">
    <div class="container">
      <div class="col-md-12">
        <vuestic-widget headerText="Edit Job">
          <form>
            <div class="row">
              <div class="col-md-6">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" required />
                      <label class="control-label" for="simple-input">Job Title</label>
                      <i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" required />
                      <label class="control-label" for="simple-input">Staffs Needed</label>
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
                      <textarea type="text" id="simple-textarea" required></textarea>
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
                      <input id="simple-input" required />
                      <label class="control-label" for="simple-input">Client's Name</label>
                      <i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <vuestic-date-picker
                        id="date-picker-time"
                        :config="{enableTime: true}"
                        v-model="datepicker.time"
                      />
                      <label class="control-label" for="date-picker-time">Starting Time</label>
                      <i class="bar"></i>
                    </div>
                  </div>

               
                    <vuestic-file-upload
                      type="single"
                      :file-types="'.png, .jpg, .jpeg'"
                  
                    />
                 
                </fieldset>
              </div>
            </div>
            <div class="col-sm-6 col-lg-6 col-xl-3 d-flex justify-content-center">
              <button class="btn btn-dark">post job</button>
            </div>
          </form>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "editjob",
  computed: {
    datePickerDisabled: () => [date => !(date.getDate() % 5)],
    isSuccessfulEmailValid() {
      let isValid = false;
      if (this.formFields.successfulEmail) {
        isValid =
          this.formFields.successfulEmail.validated &&
          this.formFields.successfulEmail.valid;
      }
      return isValid;
    }
  },
  data() {
    return {
      isMale: true,
  
      chosenCountry: "",
      clearableText: "",
      successfulEmail: "andrei@dreamsupport.io",
      wrongEmail: "andrei@dreamsupport",
      simpleOptions: [
        {
          id: 1,
          description: "First option"
        },
        {
          id: 2,
          description: "Second option"
        },
        {
          id: 3,
          description: "Third option"
        }
      ],
      simpleSelectModel: "",
      multiSelectModel: [],
   

      datepicker: {
        simple: "2018-05-09",
        time: "2018-05-08 14:10",
        range: "2018-05-08 to 2018-05-23",
        disabled: "2018-05-09",
        multiple: "2018-04-25, 2018-04-27"
      }
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
