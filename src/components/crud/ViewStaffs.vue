<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-12">
        <vuestic-widget headerText="Our Staffs">
          <div class="spinner-border" v-if="loading" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div v-if="error">
            <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
          </div>

          <div class="table-responsive">
            <table class="table table-striped first-td-padding">
              <thead>
                <tr>
                  <td>{{'tables.headings.name' | translate}}</td>
                  <td>{{'tables.headings.email' | translate}}</td>
                  <td>{{'tables.headings.city' | translate}}</td>
                  <td align="right">{{'tables.headings.score' | translate}}</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Matthew McCormick</td>
                  <td>matthew30@mail.ol</td>
                  <td>Vancouver</td>
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
import Vue from "vue";

import FieldsDef from "vuestic-components/vuestic-datatable/data/fields-definition";
import ItemsPerPageDef from "vuestic-components/vuestic-datatable/data/items-per-page-definition";
import QueryParams from "vuestic-components/vuestic-datatable/data/query-params";

export default {
  name: "viewstaffs",
  components: {
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.isLoading;
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.color-icon-label-table {
  td:first-child {
    width: 1rem;
  }
}
</style>
