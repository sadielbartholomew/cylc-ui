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
    props: ['dotClass'],
    data: () => ({
      // Status indicator icon class to replace each task state with:
      stateClassMappings: {
        'runahead': 'intermediary',
        'waiting': 'intermediary',
        'held': 'intermediary',
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
      isActive() {
        return this.testNotInState(this.dotClass, 'active')
      },
      isPositive() {
        return this.testNotInState(this.dotClass, 'positive')
      },
      isNegative() {
        return this.testNotInState(this.dotClass, 'negative')
      },
      isIntermediary() {
        return this.testNotInState(this.dotClass, 'intermediary')
      },
      testNotInState(stateString, requiredState) {
        if (stateString == null ||
            this.stateClassMappings[stateString] == null ||
            this.stateClassMappings[stateString] != requiredState) {
          return false;
        } else {
          return true;
        }
      },
    },
  computed: {
  }
  }
</script>
