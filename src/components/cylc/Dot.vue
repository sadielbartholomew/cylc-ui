<style>
@import '~@/styles/status-indicator/resize.css';
</style>

<template>
  <!-- keyword 'on' here is arbitary, it is the class name that sets this. -->
  <status-indicator
    v-bind:active="isActive()"
    v-bind:positive="isPositive()"
    v-bind:negative="isNegative()"
    v-bind:intermediary="isIntermediary()"
  >
  </status-indicator>
</template>

<script>
  import 'status-indicator/styles.css'
  export default {
    name: 'Dot',
    props: ['dotclass'],
    data: () => ({
      // Status indicator icon class to replace each task state with:
      stateClassMappings: {
        'runahead': 'intermediary',
        'waiting': 'intermediary',
        'held': 'active',  // change, testing
        'queued': 'intermediary',
        'expired': 'negative',
        'ready': '',
        'submitFailed': 'negative',
        'submitRetrying': '',
        'submitted': '',
        'retrying': '',
        'running': 'active',
        'failed': 'negative',
        'succeeded': 'positive'
      },
    }),
    methods: {
      convertClass(classname) {
        if (this.stateClassMappings[classname] == null) {
          return "CLASSNAME NOT REC";
        } else {
          return this.stateClassMappings[classname];
        }
      },
      isActive() {
        if (false) {
          return true;
        } else {
          return false;
        }
      },
      isPositive() {
        return false;
      },
      isNegative() {
        return false;
      },
      isIntermediary() {
        return true;
      },
    },
  computed: {
  }
  }
</script>
