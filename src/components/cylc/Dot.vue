<style>
@import '~@/styles/status-indicator/resize.css';
</style>

<template>
  <status-indicator v-bind:class="dotclass"></status-indicator>
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
      convertClass (classname) {
        if (this.stateClassMappings[classname] == null) {
          return "CLASSNAME NOT REC";
        } else {
          return this.stateClassMappings[classname];
        }
      },
    }
  }
</script>
