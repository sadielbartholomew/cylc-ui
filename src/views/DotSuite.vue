<style>
@import '~@/styles/status-indicator/resize.css';
</style>

<template>
  <v-container
      fill-height
      fluid
      grid-list-xl
  >
    <v-layout
        justify-center
        wrap
    >
      <v-flex
          md12
      >

<!-- TEMPORARY dump of status indicators. Incorporate into view later -->
<status-indicator active></status-indicator>
<status-indicator positive></status-indicator>
<status-indicator intermediary></status-indicator>
<status-indicator negative></status-indicator>
<status-indicator></status-indicator>

<status-indicator active pulse></status-indicator>
<status-indicator positive pulse></status-indicator>

        <material-card
            :text="$t('DotView.tableSubHeader')"
            :title="$t('DotView.tableHeader')"
            color="indigo"
        >
          <vue-ads-table
              :columns="columns"
              :rows="dot"
              :classes="classes"
              :filter="filter"
              :start="start"
              :end="end"
              @filter-change="filterChanged"
          >
          </vue-ads-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { SuiteService } from 'suite-service'
  import { mapState } from 'vuex'
  import 'status-indicator/styles.css'

  const suiteService = new SuiteService();

  export default {
    metaInfo() {
      return {
        title: 'Cylc UI | Dot View ' + this.$route.params.name
      }
    },
    data: () => ({
      columns: [
        {
          property: 'name',
          title: 'Task Name',
          direction: null,
          filterable: true,
        },
        {
          property: 'cyclePoint',
          title: 'Cycle Point',
          direction: null,
          filterable: true,
        },
        {
          property: 'state',
          title: 'SOME CP',
          direction: null,
          filterable: true,
        },
      ],
      classes: {
        table: "v-table",
      },
      // vue-ads-table-tree filtering (even if not enabled, we need this)
      filter: '',
      // vue-ads-table-tree pagination
      start: 0,
      end: 100,
      // TODO: page polling, for the time being until we have websockets/graphql subscriptions
      polling: null,
      // Status indicator icon class to replace each task state with
      state_icon_mappings: {
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
    }),
    methods: {
      filterChanged (filter) {
        this.filter = filter;
      },
      fetchSuite() {
        const suiteId = this.$route.params.name
        suiteService.fetchSuiteDotView(suiteId)
        // TODO: to be replaced by websockets
        this.polling = setInterval(() => {
          suiteService.currentTaskIndex += 1
          suiteService.fetchSuiteDotView(suiteId)
        }, 3000)
      }
    },
    beforeDestroy() {
      clearInterval(this.polling)
    },
    computed: {
      // namespace: module suites, and property suites, hence these repeated tokens...
      ...mapState('suites', ['tasks', 'dot']),
      ...mapState(['isLoading']),
      //allCyclePoints: function () {
      //  var allColumns = {};
      //  for (point of cyclePoint) {
      //    allColumns.push({
      //      property: point,
      //      title: point,
      //      direction: null,
      //      filterable: true,
      //      collapseIcon: true
      //    })
      //  }
      //  return allColumns
      //}
      //getCP:
    },
    mounted: function () {
      this.fetchSuite()
    },
  }
</script>
