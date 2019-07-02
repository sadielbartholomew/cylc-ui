<template>
  <div>
    <toolbar />

    <drawer />

    <v-content>
      <alert />
      <div id="core-view">
        <v-fade-transition mode="out-in">
          <slot/>
        </v-fade-transition>

  <auto-responsive
    v-bind="options"
  >
        <material-card v-for="item in data" :style="style" class="item" :key="item"
            text="Suite"
            title={{ item }}
            color="green"
        >
        </material-card>
  </auto-responsive>

      </div>
      <Footer/>
    </v-content>
  </div>
</template>

<script>
import Toolbar from '@/components/core/Toolbar'
import Alert from '@/components/core/Alert'
import Drawer from '@/components/core/Drawer'
import Footer from '@/components/core/Footer'
import AutoResponsive from 'autoresponsive-vue'

import Vue from 'vue'
Vue.use(AutoResponsive)

export default {
  name: 'SuiteViews',
  components: {
    Toolbar,
    Alert,
    Drawer,
    Footer
  }
}
</script>

<style scoped>
#core-footer {
  position: relative;
}
</style>
