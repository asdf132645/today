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
      <TextLabel
        text='업체 소개'
        text-size-head
        weight-bold
      />

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
