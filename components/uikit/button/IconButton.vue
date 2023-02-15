<template>
  <div>
    <v-btn rounded
           depressed
           small
           color='secondary'
           @click='onClick'>
      <v-icon :left='text'
      >
        {{ mdiName }}
      </v-icon>
      {{ text }}
    </v-btn>
  </div>
</template>

<script lang='ts'>
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class IconButton extends Vue {
  @Prop() readonly mdiName!: string;
  @Prop() readonly text!: string;

  @Emit()
  onClick(): void {
  }
}
</script>

<style scoped>
</style>
