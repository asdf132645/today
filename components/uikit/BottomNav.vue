<template>
  <div>
    <v-bottom-navigation
      app
      fixed
      grow
      class='bottom-nav'
      hide-on-scroll
      color=""
    >
      <v-btn value='top'
             color='white'
             @click='onClickHome'
      >
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>
      <v-btn
             value='code' color='white' @click='onClickSearch'>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import RouterUtils from "~/common/lib/routerUtils";

@Component({
  components: {}
})
export default class BottomNav extends Vue {
  onClickHome(): void {
    RouterUtils.goHome();
  }

  onClickSearch(): void {

  }
}


</script>

<style scoped>

.bottom-nav {
  margin: 0 auto;
  max-width: var(--body-max-width);
  left: auto !important;
  background: #fff;
}
</style>
