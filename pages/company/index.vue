<template>
  <div>
    <PageTitleBar
      title='회사소개'
    ></PageTitleBar>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import PageTitleBar from '~/components/layout/PageTitleBar.vue';

@Component({
  components: {PageTitleBar}
})
export default class Company extends Vue {

}
</script>

<style scoped>
</style>
