<template>
  <div>
    <PageTitleBar
      title='견적요청'
    ></PageTitleBar>
    <main-body>
      <div>
        <div class="divLine">
          <div class="login-title">
            주소
          </div>
          <div class="container p-5">
            <h1>우편번호 검색 테스트</h1>
            <input id="sample6_postcode" type="text" placeholder="우편번호">
            <input type="button" value="우편번호 찾기" @click="addrSearch"><br>
            <input id="sample6_address" type="text" placeholder="주소"><br>
            <input id="sample6_detailAddress" type="text" placeholder="상세주소">
            <input id="sample6_extraAddress" type="text" placeholder="참고항목">
          </div>
        </div>
      </div>
    </main-body>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import MainBody from '~/components/layout/MainBody.vue';
import Section from '~/components/layout/Section.vue';
import TextLabel from '~/components/uikit/text/TextLabel.vue';
import PageTitleBar from "~/components/layout/PageTitleBar.vue";
import companyListItem from '~/components/uikit/company/companyListItem.vue';
import Content from '~/components/layout/Content.vue';

@Component({
  components: {
    MainBody,
    Section,
    TextLabel,
    PageTitleBar,
    companyListItem,
    Content,
  }
})
export default class Estimate extends Vue {
  address:object = {
    detailAddress: "",
    roadAddress: "",
  }

  head() {
    return {
      script: [
        {type: 'text/javascript', src: "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"},
      ]
    };
  }

  mounted():void{

  }

  addrSearch(): void{
    // eslint-disable-next-line
    const daum = window['daum'];

    new daum.Postcode({
      oncomplete(data: any) {
        // 확인 시 결과 데이터 Return 확인
        console.log(data);
        this.address = data.address;
      }
    }).open();

  }
}
</script>

<style scoped>

</style>
