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
      하단 영역
    </v-bottom-navigation>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';

@Component({
  components: {}
})
export default class BottomNav extends Vue {

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
