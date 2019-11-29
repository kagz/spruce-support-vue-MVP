<template>
  <div>
    <vuestic-alert dismissible @input="onClose" type="danger" :withCloseBtn="true">
      <span class="badge badge-pill badge-danger">Failed</span>
      {{ text }}
    </vuestic-alert>
  </div>
</template>

<script>
export default {
  props: ["text"],
  methods: {
    onClose() {
      this.$emit("dismissed");
    }
  }
};
</script>
