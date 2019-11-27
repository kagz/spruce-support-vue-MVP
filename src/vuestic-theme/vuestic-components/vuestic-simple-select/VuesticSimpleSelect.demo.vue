<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-simple-select
        label="Select country"
        v-model="selectedCountry"
       
      />
    </div>
    <div class="demo-container__item">
      <vuestic-simple-select
        label="Select country duplicate"
        v-model="selectedCountry"
  
      />
    </div>
  </div>
</template>

<script>

import VuesticSimpleSelect from './VuesticSimpleSelect'

export default {
  components: {
    VuesticSimpleSelect,
  },
  data () {
    return {
      selectedCountry: '',
    
    }
  },
}
</script>
