<template>
  <div>
    <v-btn fab
           :small='small !== false'
           :color='backgroundColor'
           @click='onClick'>
      <v-icon :color='iconColor'>
        {{ mdiName }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script lang='ts'>
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class FabButton extends Vue {
  @Prop() readonly mdiName!: string;
  @Prop({ default: false}) readonly small!: boolean|null;
  @Prop({ default: true }) readonly dark!: boolean|null;

  get iconColor(): string {
    return this.dark !== false ? 'white' : 'secondary';
  }

  get backgroundColor(): string {
    return this.dark !== false ? 'secondary' : 'white';
  }

  @Emit()
  onClick(): void {
  }
}
</script>

<style scoped>
</style>
