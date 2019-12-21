<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-12">
        <vuestic-widget headerText="Our Staffs">
          <!-- <div class="spinner-border" v-if="loading" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div v-if="error">
            <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
          </div> -->

          <div class="table-responsive">
            <table class="table table-striped first-td-padding">
              <thead>
                <tr>
                  <td>full name</td>
                  <td>email</td>
                  <td>phone</td>
                  <td>passport</td>
                  <td align="right">worked hours</td>
                  <td align="right">edit staff</td>

                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="staff in staffs" :key="staff.id">
              <td>{{staff.fullname}}</td>
                  <td>{{staff.email}}</td>
                  <td>{{staff.phone}}</td>
                  <td>{{staff.passport}}</td>
                  <td align="right">48hrs</td>
                  <td align="right">
                    <div>
                      <a class="btn btn-with-icon btn-success btn-micro rounded-icon my-2 my-sm-0">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </a>
                    </div>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../../firebase'
export default {
  name: 'viewstaffs',

  firestore () {
    return {
      staffs: db.collection('profiles'),
    }
  },
}

</script>

<style lang="scss">
.color-icon-label-table {
  td:first-child {
    width: 1rem;
  }
}
</style>
