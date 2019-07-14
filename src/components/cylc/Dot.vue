<style>
@import '~@/styles/status-indicator/resize.css';
</style>

<template>
  <status-indicator
    :active="isActiveMappedState()"
    :positive="isPositiveMappedState()"
    :negative="isNegativeMappedState()"
    :intermediary="isIntermediaryMappedState()"

    v-on:click="dismissPulse()"
    :pulse="isPulseOn"

  >
  </status-indicator>
</template>

<script>
  // THis script customises the default 'dot' icons and animations.
  import 'status-indicator/styles.css'
  export default {
    name: 'Dot',
    props: ['dotClass'],
    data: () => ({
      // Status indicator icon class to replace each task state with:
      stateToDotClassMappings: {
        'runahead': 'intermediary',
        'waiting': 'intermediary',
        'held': 'intermediary',
        'queued': 'intermediary',
        'expired': 'negative',
        'submitFailed': 'negative',
        'failed': 'negative',
        'ready': '',
        'submitted': '',
        'submitRetrying': 'active',
        'retrying': 'active',
        'running': 'active',
        'succeeded': 'positive'
      },
      isPulseOn: true
    }),
    methods: {
      isActiveMappedState() {
        return this.testInState(this.dotClass, 'active');
      },
      isPositiveMappedState() {
        return this.testInState(this.dotClass, 'positive');
      },
      isNegativeMappedState() {
        return this.testInState(this.dotClass, 'negative');
      },
      isIntermediaryMappedState() {
        return this.testInState(this.dotClass, 'intermediary');
      },
      testInState(stateString, requiredState) {
        // For safety with 'undefined' values, check variety of negation cases:
        if (stateString == null ||
            this.stateToDotClassMappings[stateString] == null ||
            this.stateToDotClassMappings[stateString] != requiredState) {
          return false;
        } else {
          return true;
        }
      },
      dismissPulse() {
        this.isPulseOn = false;
      },
      //isPulseOn() {
      //  return true;
      //}
    }
  }
</script>
