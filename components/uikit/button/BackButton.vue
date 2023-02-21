<template>
  <v-container class='pa-2'>
    <v-btn icon class='button-background' color='white' @click='onClick'>
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
  </v-container>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class BackButton extends Vue {
  onClick(): void {
    // this.$router.back();
    history.back();
  }
}
</script>

<style scoped>
.button-background {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
