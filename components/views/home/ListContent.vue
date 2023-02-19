<template>
  <div class="listContentDiv">
    <MainBody>
      <ul>
        <router-link to="/company">
          <li>
            <v-icon right class='ml-0'>mdi-city</v-icon>
            <p>회사 소개</p>
          </li>
        </router-link>
        <router-link to="">
          <li>
            <v-icon>mdi-clipboard-check</v-icon>
            <p>영업 안내</p>
          </li>
        </router-link>
        <router-link to="">
          <li>
            <v-icon>mdi-clipboard-edit</v-icon>
            <p>후기</p>
          </li>
        </router-link>
        <router-link to="">
          <li>
            <v-icon>mdi-clipboard-file</v-icon>
            <p>문의접수</p>
          </li>
        </router-link>
      </ul>
    </MainBody>
    <Section>
      <div>
        <div>
        <TextLabel
          text='업체 소개'
          text-size-head
          weight-bold
        />
        <p>여러 업체에 다양한 정보를 만나보세요.</p>
        </div>
        <div>
          <p>
            <router-link to="/businessInfo">
              전체보기</router-link></p>
        </div>
      </div>
      <div>
        <v-sheet
          class="mt-5 mx-auto"
          elevation="8"
          max-width="100%"
        >
          <v-slide-group mobile-breakpoint="0" mobile-break-point="1000" show-arrows center-active>
            <v-slide-item v-for="(slide, i) in slides" :key="i">
              <v-card width="200" class="ma-4">
                <v-card-title>
                  <v-img height="200px" contain :src="slide.image"></v-img>
                </v-card-title>
                <v-card-text>
                  <b>{{ slide.price }}€</b>
                </v-card-text>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </Section>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import MainBody from '~/components/layout/MainBody.vue';
import Section from '~/components/layout/Section.vue';
import TextLabel from '~/components/uikit/text/TextLabel.vue';

@Component({
  components: {
    MainBody,
    Section,
    TextLabel,
  }
})
export default class ListContent extends Vue {
  slides: object[] = [
    {
      title: 'TERRA PC-BUSINESS 5050S',
      image: 'https://www.wortmann.de/content/files/images/ProductImages/medium/item100955910000.jpg',
      price: 559
    },
    {
      title: 'TERRA PC-BUSINESS 5000',
      image: 'https://www.wortmann.de/content/files/images/ProductImages/medium/item100956890000.jpg',
      price: 609
    },
    {
      title: 'TERRA PC-Micro 6000SE SILENT GREENLINE ',
      image: 'https://www.wortmann.de/content/files/images/ProductImages/medium/item100955650000.jpg',
      price: 689
    },
  ]
}

</script>

<style scoped>
.listContentDiv {
  margin-top: 20px;
}

.listContentDiv ul li {
  list-style: none;
  display: inline-block;
  width: 22%;
  border: 1px solid #dedede;
  border-radius: 100%;
  height: 107px;
  text-align: center;
  padding: 20px;
  margin: 5px;
  cursor: pointer;
}

.listContentDiv ul li p {
  margin: auto;
  display: block;
  text-decoration: none;
}

</style>
