<template>
  <div>
    <v-card flat tile>
      <HomeBanner/>
      <ListContent/>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import HomeBanner from '~/components/views/home/HomeBanner.vue';
import ListContent from '~/components/views/home/ListContent.vue';

@Component({
  components: {
    HomeBanner,
    ListContent
  }
})
export default class Home extends Vue {

}
</script>

<style scoped>

</style>

