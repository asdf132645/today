<template>
  <div>
    <PageTitleBar
      title='업체 소개'
    ></PageTitleBar>
    <main-body>
      <div>
        <Content v-for='(companyItem, index) in companyList' :key='index'
        >
          <companyListItem
            :company-item='companyItem'
            class='v-chip--clickable'
            :comapny-obj="companyItem"
          >
          </companyListItem>
        </Content>
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
import {companyApi} from "~/common/api/service/company/companyApi";
import {CompanyList} from "~/common/api/service/company/dto/companyApiDto";

@Component({
  components: {
    MainBody,
    Section,
    TextLabel,
    PageTitleBar,
    companyListItem,
    Content
  }
})
export default class BusinessInfo extends Vue {
  companyList: CompanyList | any[] = [];

  mounted():void{
    this.companyListGet();
  }

  async companyListGet(): Promise<void>{
    try {
      const response = await companyApi.companyList();
      console.log(response.data);
      this.companyList = response.data?.data?.companyList;
    } catch (e) {
      const error = e as Error;
      console.log(error.message);
    }
  }
}
</script>

<style scoped>

</style>
