<template>
  <div class="listContentDiv">
    <ul>
      <li>
        <v-icon right class='ml-0'>mdi-city</v-icon>
        <router-link to="">회사 소개</router-link>
      </li>
      <li>
        <v-icon>mdi-clipboard-check</v-icon>
        <router-link to="">영업 안내</router-link>
      </li>
      <li>
        <v-icon>mdi-clipboard-edit</v-icon>
        <router-link to="">후기</router-link>
      </li>
      <li>
        <v-icon>mdi-clipboard-file</v-icon>
        <router-link to="">문의접수</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';


@Component({
  components: {}
})
export default class ListContent extends Vue {

}

</script>

<style scoped>
  .listContentDiv ul li{
    list-style: none;
  }
</style>
