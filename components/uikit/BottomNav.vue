<template>
    <v-bottom-navigation
      v-model='activeItem'
      app
      fixed
      grow
      class='bottom-nav'
      hide-on-scroll
    >
      <v-btn value='top'
             color='white'
             @click='onClickHome'
      >
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>
      <v-btn
             value='code' color='white' @click='onClickSearch'>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn value='account' color='white' @click='onClickMyPage'>
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import RouterUtils from "~/common/lib/routerUtils";
import SiteStoreUtils from "~/store/utils/siteStoreUtils";

@Component({
  components: {}
})
export default class BottomNav extends Vue {
  activeItem = 'top';
  user: string | null = null;

  onClickHome(): void {
    RouterUtils.goHome();
  }

  onClickSearch(): void {

  }

  onClickMyPage():void{
      // if(this.user === null){
      //   this.$router.push('/login');
      // }else{
      //   this.$router.push('/mypage');
      // }
    SiteStoreUtils.loginAndMoveTo('/mypage');
  }
}


</script>

<style scoped>

.bottom-nav {
  margin: 0 auto;
  max-width: var(--body-max-width);
  left: auto !important;
  background: #fff;
}

.v-item-group.v-bottom-navigation .v-btn {
  background-color: transparent;
  border-radius: 0;
  box-shadow: none;
  flex: 0 1 auto;
  font-size: .75rem;
  height: inherit;
  max-width: 168px;
  min-width: 80px;
  position: relative;
  text-transform: none;
}
</style>
