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
            <template
              slot="state"
              slot-scope="props"
              class="dotClass">
                <someDot :dotClass="props.row[props.column.property]">
                </someDot>
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
      someDot: Dot,
      watch: {
        dotClass: function (latestState, previousState) {
          // Compare task state just received to the previous; look for change.
          if (latestState != previousState) {
            this.hasStateChanged = true;
          }
        }
      },
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
      filter: '',
      start: 0,
      end: 100,
      polling: null,
    }),
    methods: {
      filterChanged (filter) {
        this.filter = filter;
      },
      fetchSuite() {
        const suiteId = this.$route.params.name
        suiteService.fetchSuiteDotView(suiteId)
        this.polling = setInterval(() => {
          suiteService.currentTaskIndex += 1
          suiteService.fetchSuiteDotView(suiteId)
        }, 3000)
      },
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
