<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class MainBody extends Vue {
}
</script>

<style scoped>
</style>
