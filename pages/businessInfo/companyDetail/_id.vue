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
<!--      {{review }}-->
      <div v-for="(item, idx) in review" :key="idx">
<!--        {{ item.userId }}-->
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
          v-model="item.rating"
          readonly
          bg-color="orange-lighten-1"
          color="blue"
        ></v-rating>

        <p class="mb-0">
          {{ item.text }}
        </p>
        <p>
          작성자: {{ item.userId }}
        </p>
        <p>
          등록일: {{ item.createdAt}}
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
import {reviewsApi} from "~/common/api/service/reviews/reviewsApi";


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
  review: object[] = [{}];
  users: object[] = [];


  created(){
    this.queryCompanyDetail();
    this.companyReviewList();
  }

  async companyReviewList(): Promise<void> {
    try {
      const response = await reviewsApi.reviewsList(this.$route.params.id);
      const reviews = response.data.data.reviewList;
      // this.review = reviews

      console.log(response.data.data.reviewList[0].user.id);
      this.review = [];
      for (const i in reviews) {
        this.review.push({
          userId: reviews[i].user.user_id,
          text:reviews[i].text,
          createdAt:reviews[i].createdAt,
          rating:reviews[i].rating,
          companyCode: reviews[i].companyCode,
          userCreatedAt: reviews[i].user.createdAt,

        });
        // this.users.push({userId: reviews[i].user.user_id});
      }

      // response.data.data.rating
    } catch (e) {
      const error = e as Error;
      console.log(error.message);
    }
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
