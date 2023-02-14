<template>
  <v-app class='app-body'>
    <!--    <v-main class='elevation-10'>-->
    <div>
      <TopHead></TopHead>
    </div>

    <div>
    <v-main>
      <Nuxt keep-alive :keep-alive-props='{ exclude: NotCachedComponents }'/>
    </v-main>
    </div>


    <div>
      <BottomNav />
    </div>

  </v-app>
</template>

<script lang='ts'>
import {Component, Vue} from 'nuxt-property-decorator';
import BottomNav from '~/components/uikit/BottomNav.vue';
import TopHead from "~/components/views/home/TopHead.vue";

@Component({
  components: {TopHead,BottomNav}
})

export default class AppMain extends Vue {
  NotCachedComponents = [];

}

</script>
