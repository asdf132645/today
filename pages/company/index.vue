<template>
  <div>
    <PageTitleBar
      title='회사소개'
    ></PageTitleBar>
  </div>
</template>

<script lang='ts'>
import {Component, Vue} from 'nuxt-property-decorator';
import PageTitleBar from '~/components/layout/PageTitleBar.vue';
import { boardApi } from '~/common/api/service/board/boardApi';
import {BoardAdd} from "~/common/api/service/board/dto/boardApiDto";

@Component({
  components: {PageTitleBar}
})
export default class Company extends Vue {

  mounted():void {
    this.addInquiry();
  }

  async addInquiry(): Promise<void> {
      const pa:BoardAdd = {
        userID: '',
        password: '',
        email: '',
        nickname:'',
      }
      try {
        await boardApi.inquiryAdd(pa);
      } catch (e) {
        console.log(e)
      }
    }

}
</script>

<style scoped>
</style>
