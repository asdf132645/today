<template>
  <div>
    <PageTitleBar
      title='마이페이지'
    ></PageTitleBar>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import PageTitleBar from '~/components/layout/PageTitleBar.vue';
import {UserType} from "~/common/type/userType";
import {userStore} from "~/store";

@Component({
  components:{PageTitleBar,}
})
export default class MyPage extends Vue {
  userType: UserType | null = null;

  mounted(){
    this.userType = userStore.userType;

    if (this.userType === UserType.general) {// 일반회원

    } else if(this.userType === null){
      alert('로그인 후 이용해 주세요.');
      this.$router.replace('/login');
    }
  }
}
</script>

<style scoped>

</style>
