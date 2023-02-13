<template>
  <v-bottom-navigation
    app
    fixed
    grow
    class='bottom-nav'
    hide-on-scroll
    color=""
  >
    하단 영역
  </v-bottom-navigation>
</template>

<script lang="ts">
import {  Vue } from 'nuxt-property-decorator';


export default class BottomNav extends Vue {

}


</script>

<style scoped>

.bottom-nav {
  margin: 0 auto;
  max-width: var(--body-max-width);
  left: auto !important;
  background: cadetblue;
}
</style>
