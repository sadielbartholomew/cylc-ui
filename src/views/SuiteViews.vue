<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
  </v-container>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: 'Cylc UI | Suite Views'
    }
  },
  data() {
    return {
      data: ["my_suite_1_view_1", "my_suite_2_view_1", "my_suite_3_view_1",
             "my_suite_1_view_2", "my_suite_2_view_2", "my_suite_3_view_2"],
      options: {
containerWidth: 10,
containerHeight: 10,
      }
    }
  },
}
</script>
