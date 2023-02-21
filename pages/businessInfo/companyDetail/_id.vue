<template>
  <div>

    <ImageTitleBar
      :image-url='storeInfo[0]?.url'
      :title='String($route.query.name)'
      :description='storeInfo[0]?.division'
      has-share-button
      has-map-button
      has-more-images
      :hasFaveButton="false"
    ></ImageTitleBar>
    <v-rating
      v-model="storeInfo[0].scope"
      readonly
      bg-color="orange-lighten-1"
      color="blue"
    ></v-rating>
    <Section
             title='업체 정보'
             has-divider
    >
      {{ storeInfo[0].description }}
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
                    @click="viewImg(imgItm.img)"
                    cover
                    height="150"
                    class="text-right pa-2 pointCursor"
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
  storeInfo: object[] = [];
  imgPage: boolean = false;
  openDialog:number = 0;
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

  // $route.query.name
  fetch(): void {
    this.queryStoreInfo();
  }

  viewImg(img: string): void{
    this.imgdata = img;
    this.openDialog = Math.random();
    this.imgPage = true;
  }

  queryStoreInfo(): void{
      // 백엔드에서 업체정보
      this.storeInfo = [{
        url: [
          {
            img:'https://hitable2020images.blob.core.windows.net/store/tablenjoy%2F2023-02%2F1676439873588.jpg',
            width:'',
            height:'',
          },
          {
            img:'https://hitable2020images.blob.core.windows.net/store/tablenjoy%2F2023-02%2F1676439873588.jpg',
            width:'',
            height:'',
          }
        ],
        name: '업체명1',
        division:'인테리어',
        description:'이업체는 언제까지하고 언제까지함 그리고 지역은 어디에있음 ~~!',
        scope: 3,

      }]

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
