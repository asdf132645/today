<template>
  <div>
    <div class="topHeadDiv">
      <div>
        <v-img class="logo" :src="require('~/assets/img/logo.jpg')"></v-img>
      </div>
      <div class="title"> TITLE</div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';

@Component({
  components: {}
})
export default class TopHead extends Vue {

}
</script>

<style scoped>

.title {
  margin: auto;
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
