<template>
  <div>
    <ImageTitleBar
      :image-url='companyImgArr'
      :title='companyInfo.company_name'
      :description='companyInfo.companyType'
      has-share-button
      has-map-button
      has-more-images
      :has-fave-button="false"
    ></ImageTitleBar>
    <v-rating
      v-model="rating"
      readonly
      bg-color="orange-lighten-1"
      color="blue"
    ></v-rating>
    <Section
             title='업체 정보'
             has-divider
    >
      {{ companyInfo.companyDescription }}
    </Section>
    <Section
      title='업체 리뷰'
      has-divider
    >
      <div v-for="(item, idx) in review" :key="idx">

        <v-container class="pa-1">
          <v-item-group
            multiple
          >
            <v-row>
              <v-col
                v-for="(imgItm, i) in item.url"
                :key="i"
                cols="12"
                md="6"
              >
                  <v-img
                    :src="imgItm.img"
                    cover
                    height="150"
                    class="text-right pa-2 pointCursor"
                    @click="viewImg(imgItm.img)"
                  >
                  </v-img>
              </v-col>
            </v-row>
          </v-item-group>
        </v-container>
        <v-rating
          v-model="item.scope"
          readonly
          bg-color="orange-lighten-1"
          color="blue"
        ></v-rating>

        <p class="mb-0">
          {{ item.content }}
        </p>
        <p>
          작성자: {{ item.id }}
        </p>
        <p>
          등록일: {{ item.regDate}}
        </p>
        <div class="line-today"></div>
      </div>
    </Section>
  <Commondialgos :img-data="imgdata" :img-data-open="openDialog"></Commondialgos>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import TextLabel from '~/components/uikit/text/TextLabel.vue';
import PageTitleBar from "~/components/layout/PageTitleBar.vue";
import ImageTitleBar from '~/components/layout/ImageTitleBar.vue';
import Section from '~/components/layout/Section.vue';
import Commondialgos from "~/components/dialgos/Commondialgos.vue";
import {companyApi} from "~/common/api/service/company/companyApi";
import {companyDetailDto} from "~/common/api/service/company/dto/companyApiDto";


@Component({
  components: {
    TextLabel,
    PageTitleBar,
    ImageTitleBar,
    Section,
    Commondialgos
  }
})
export default class companyDetail extends Vue {
  imgdata: string = '';
  companyInfo: companyDetailDto | any = [];
  imgPage: boolean = false;
  openDialog:number = 0;
  rating: number = 0;
  companyImgArr: any[] = [];
  review: object[] = [{
    content:'업체리뷰공간',
    url: [
      {
        img:'https://hitable2020images.blob.core.windows.net/store/tablenjoy%2F2023-02%2F1676439873588.jpg',
        width:'',
        height:'',
      },
      {
        img:'https://hitable2020images.blob.core.windows.net/store/test%2Fcoincoin%2F2022-04%2F202204271614273',
        width:'',
        height:'',
      }
    ],
    scope:3,
    id:'a',
    regDate:'2023-03-01',
  },{
    content:'업체리뷰공간',
    url: [
      {
        img:'https://hitable2020images.blob.core.windows.net/store/tablenjoy%2F2023-02%2F1676439873588.jpg',
        width:'',
        height:'',
      },
      {
        img:'https://hitable2020images.blob.core.windows.net/store/test%2Fcoincoin%2F2022-04%2F202204271614273',
        width:'',
        height:'',
      }
    ],
    scope:3,
    id:'b',
    regDate:'2023-03-01',
  }];


  created(){
    this.queryCompanyDetail();
  }

  viewImg(img: string): void{
    this.imgdata = img;
    this.openDialog = Math.random();
    this.imgPage = true;
  }

  async queryCompanyDetail(): Promise<void>{

    // companyDetail
    try {
      const response = await companyApi.companyDetail(this.$route.params.id);
      this.companyInfo = response.data.data.companyDetail;
      this.rating = response.data.data.rating;
      this.companyImgArr = [];
      console.log(response.data.data.companyDetail.url);

      for (const i in response.data.data.companyDetail.url) {
        this.companyImgArr.push({
          img: response.data.data.companyDetail.url[i],
        });
      }
      console.log(response.data.data.companyDetail);

      // response.data.data.rating
    } catch (e) {
      const error = e as Error;
      console.log(error.message);
    }


  }
}
</script>

<style scoped>
  .line-today{
    border: 1px solid #e8e8e8;
    width: 100%;
    margin-bottom: 10px ;
  }
  .pointCursor{
    cursor: pointer;
  }
</style>
