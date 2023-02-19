<template>
  <div>

    <PageTitleBar
      :title='String($route.query.name)'
    ></PageTitleBar>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import TextLabel from '~/components/uikit/text/TextLabel.vue';
import PageTitleBar from "~/components/layout/PageTitleBar.vue";

@Component({
  components: {
    TextLabel,
    PageTitleBar
  }
})
export default class companyDetail extends Vue {

}
</script>

<style scoped>

</style>
