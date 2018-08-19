<template>
  <div>
    <h1 :style="statusColorStyle">
      {{name}} : {{price}}
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {
  props: ['name', 'price'],
  computed: {
    statusColorStyle () {
      if (this.price > 1000) {
        return 'color: #F00'
      } else {
        return 'color: #0F0'
      }
    }
  }
}
</script>

<style scoped>

</style>
