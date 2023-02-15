<template>
  <div>
    <v-toolbar tile flat>
      <v-app-bar-nav-icon v-if='noBackButton === false' @click='goBack'>
        <v-icon>mdi-arrow-left</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title class='text-h6 font-weight-bold'>
        {{ title }}
      </v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class PageTitleBar extends Vue {
  @Prop() readonly title!: string;
  @Prop({default: false}) readonly noBackButton!: boolean | null;

  goBack(): void {
    history.back();
  }
}
</script>

<style scoped>
</style>
