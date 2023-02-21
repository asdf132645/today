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
  companyList: object = [
    {name:'업체명1',num:1,division:'업체설명1',AdditionalDes:'업체 부설명'},
    {name:'업체명2',num:2,division:'업체설명2',AdditionalDes:'업체 부설명2'}
  ];
}
</script>

<style scoped>

</style>
