<style>
@import '~@/styles/status-indicator/resize.css';
</style>

<template>
  <status-indicator :category=""></status-indicator>
</template>

<script>
  export default {
    name: 'Dot',
    props: ['stateMapping']
  }
</script>
