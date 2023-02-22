<template>
  <div>
    <PageTitleBar
      title='마이페이지'
    ></PageTitleBar>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import PageTitleBar from '~/components/layout/PageTitleBar.vue';

@Component({
  components:{PageTitleBar,}
})
export default class MyPage extends Vue {

}
</script>

<style scoped>

</style>
