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
import {userStore} from "~/store";
import UserStoreUtils from "~/store/utils/userStoreUtils";

@Component({
  components: {
    HomeBanner,
    ListContent
  }
})
export default class Home extends Vue {

  mounted(): void{
    this.refresh();
  }

  refresh(): void {
    if(userStore.accessToken === null){
      userStore.updateUserIdStr('');
      UserStoreUtils.clearAll();
    }
    console.log(userStore.accessToken);
  }
}
</script>

<style scoped>

</style>

