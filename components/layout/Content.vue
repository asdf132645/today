<template>
  <div :class="{'pt-2': !(noTop !== false), 'pb-2': !(noBottom !== false)}"
  >
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Content extends Vue {
  @Prop({ default: false }) readonly noTop!: boolean | null;
  @Prop({ default: false }) readonly noBottom!: boolean | null;
}
</script>

<style scoped>
</style>
