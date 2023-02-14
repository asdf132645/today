<template>
  <div>
    <v-card flat tile>
      <HomeBanner></HomeBanner>

    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import HomeBanner from '~/components/views/home/HomeBanner.vue';

@Component({
  components: {
    HomeBanner
  }
})
export default class Home extends Vue {

}
</script>

<style scoped>

</style>

