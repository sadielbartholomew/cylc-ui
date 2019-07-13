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

<someDot dotClass="held"></someDot>
<someDot dotClass="submitted"></someDot>
<someDot dotClass="failed"></someDot>
<someDot dotClass="succeeded"></someDot>
<someDot dotClass="running"></someDot>

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
            <template slot="state" slot-scope="props">
              <someDot dotClass="rops.row[props.column.property]"></someDot>
            </template>
          </vue-ads-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { SuiteService } from 'suite-service'
  import { mapState } from 'vuex'
  import Dot from "@/components/cylc/Dot"

  const suiteService = new SuiteService();

  export default {
    components: {
      someDot: Dot
      },
    metaInfo() {
      return {
        title: 'Cylc UI | Dot View for "' + this.$route.params.name
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
          title: 'SOMETHING',
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
      },
      dotComponent (taskState) {
        return '<someDot dotClass="' +  taskState + '"></someDot>'
      },
      renderDot (item) {
        return this.dotComponent(item)
      }
    },
    beforeDestroy() {
      clearInterval(this.polling)
    },
    computed: {
      ...mapState('suites', ['tasks', 'dot']),
      ...mapState(['isLoading']),
    },
    mounted: function () {
      this.fetchSuite()
    },
  }
</script>
