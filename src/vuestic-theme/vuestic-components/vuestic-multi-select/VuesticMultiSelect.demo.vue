<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-multi-select
        label="Select country"
        v-model="selectedCountries"
     
      />
    </div>
    <div class="demo-container__item">
      <vuestic-multi-select
        label="Select country duplicate"
        v-model="selectedCountries"
      
      />
    </div>
  </div>
</template>

<script>


import VuesticMultiSelect from './VuesticMultiSelect'

export default {
  components: {
    VuesticMultiSelect,
  },
  data () {
    return {
     
  
    }
  },
}
</script>
