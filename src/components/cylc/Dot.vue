<style>
@import '~@/styles/status-indicator/resize.css';
</style>

<template>
  <status-indicator
    :active="isActiveMappedState()"
    :positive="isPositiveMappedState()"
    :negative="isNegativeMappedState()"
    :intermediary="isIntermediaryMappedState()"
    :pulse="hasStateChanged"
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
      hasStateChanged: true,
    }),
    methods: {
      isActiveMappedState() {
        return this.testNotInState(this.dotClass, 'active');
      },
      isPositiveMappedState() {
        return this.testNotInState(this.dotClass, 'positive');
      },
      isNegativeMappedState() {
        return this.testNotInState(this.dotClass, 'negative');
      },
      isIntermediaryMappedState() {
        return this.testNotInState(this.dotClass, 'intermediary');
      },
      testNotInState(stateString, requiredState) {
        if (stateString == null ||
            this.stateToDotClassMappings[stateString] == null ||
            this.stateToDotClassMappings[stateString] != requiredState) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
</script>
