<template>
  <v-app class='app-body'>
    <!--    <v-main class='elevation-10'>-->
    <v-main>
      <Nuxt keep-alive :keep-alive-props='{ exclude: NotCachedComponents }' />
    </v-main>

    <BottomNav />


  </v-app>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import BottomNav from '~/components/uikit/BottomNav.vue';

@Component({
  components: { BottomNav }
})

export default class AppMain extends Vue {
  NotCachedComponents = [];

}

</script>
