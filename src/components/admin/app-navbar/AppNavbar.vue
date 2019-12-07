<template>
  <vuestic-navbar>
    <span slot="logo" style="height:150px;margin-top:10px;margin-bottom:10px">
      <img class="logo" src="../../../assets/icons/vue-logo2.png.png" />
    </span>

    <menu-dropdown
      v-for="(page, id) in pages"
      :key="id"
      :options="page.options"
      :name="page.name"
      :logo="page.logo"
      :link="page.link"
      class="col-xs-1"
    ></menu-dropdown>

    <profile-dropdown slot="profile" class="col-xs-1 nav-item">
      <img src="" style="width:150px;margin-top:0px;margin-bottom:10px"/>

</profile-dropdown>
  </vuestic-navbar>

</template>

<script>
import VuesticIconVuestic from '../../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconVuestic'
import VuesticNavbar from '../../../vuestic-theme/vuestic-components/vuestic-navbar/VuesticNavbar'
import HeaderSelector from './components/HeaderSelector'

import ProfileDropdown from './components/dropdowns/ProfileDropdown'
import MenuDropdown from './components/dropdowns/MenuDropdown'
import SidebarLink from '../app-sidebar/components/SidebarLink'

export default {
  name: 'app-navbar',

  components: {
    VuesticIconVuestic,
    VuesticNavbar,
    HeaderSelector,
    ProfileDropdown,
    MenuDropdown,
    SidebarLink
  },
  data () {
    return {
      pages: [
        
        {
          name: this.$t("All Jobs"),
          logo: "vuestic-icon-tables",
          link: "viewjobs",
         
        },
        {
          name: this.$t("Create New"),
          logo: "vuestic-icon-statistics",
          options: [
            {
              name: this.$t("Add Jobs"),
              link: "addjob"
            },
            
             {
              name: this.$t("Add Client"),
              link: "addclient"
            }
          ]
        },
        {
          name: this.$t("Views"),
          logo: "vuestic-icon-forms",
          options: [
           
            {
              name: this.$t("View Staffs"),
              link: "viewstaffs"
            },
          
            {
              name: this.$t("View Clients"),
              link: "viewclients"
            },
            //   {
            //   name: this.$t("View My Profile"),
            //   link: "newprofile"
            // },
          ]
        },
      
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .logo {
    display: inline-block;
    width: 80%;
    padding: 10px;
  }
</style>
