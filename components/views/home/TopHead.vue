<template>
  <div>
    <div class="topHeadDiv">
      <div>
        <v-img class="logo" :src="require('~/assets/img/logo.jpg')"></v-img>
      </div>
      <div class="search">
        <v-toolbar
          light
          flat
        >
          <v-text-field
            ref='inputField'
            v-model='keyword'
            rounded filled
            placeholder='업체명 검색'
            dense hide-details
            prepend-inner-icon='mdi-magnify'
          >
          </v-text-field>
        </v-toolbar>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';

@Component({
  components: {}
})
export default class TopHead extends Vue {
  keyword = '';
}
</script>

<style scoped>

.search {
  /*margin: auto;*/
  width: 90%;
}

.logo {
  width: 50px;
  height: 50px;
  border-radius: 100%;
}

.topHeadDiv {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
