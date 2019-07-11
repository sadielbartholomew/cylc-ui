<style>
@import '~@/styles/status-indicator/resize.css';
</style>

<template>
  <status-indicator :class="stateClassMapping"></status-indicator>
</template>

<script>
  import 'status-indicator/styles.css'
  export default {
    name: 'Dot',
    props: ['stateClassMapping'],
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
    }
  }
</script>
