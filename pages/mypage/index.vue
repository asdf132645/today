<template>
  <div>
    <PageTitleBar
      title='마이페이지'
    ></PageTitleBar>


    <div class="serviceDiv">
      <div class="user">
        <p>아이디</p>
        <p>이메일</p>
      </div>
      <TextLabel
        text-size-head
        weight-bold
        text='서비스 관리'
      />
      <ul>
        <li>
          <span>진행중</span>
          <span></span>
        </li>
        <li>
          <span>서비스완료</span>
          <span></span>
        </li>
        <li>
          <span>취소*</span>
          <span></span>
        </li>
      </ul>
    </div>
    <div class="serviceStats">
      <div>
        <div>방문완료</div>
        <div></div>
      </div>
    </div>
    <v-btn @click="logout">로그아웃</v-btn>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import PageTitleBar from '~/components/layout/PageTitleBar.vue';
import {UserType} from "~/common/type/userType";
import {userStore} from "~/store";
import TextLabel from "~/components/uikit/text/TextLabel.vue";
import UserStoreUtils from "~/store/utils/userStoreUtils";
import {userApi} from "~/common/api/service/user/userApi";
import {StoreLoginTokenParam} from "~/store/types/userStoreType";
import RouterUtils from "~/common/lib/routerUtils";

@Component({
  components: {TextLabel, PageTitleBar,}
})
export default class MyPage extends Vue {
  userType: UserType | null = null;

  mounted() {
    this.userType = userStore.userType;

    if (this.userType === UserType.general) {// 일반회원

    } else if (this.userType === null) {
      alert('로그인 후 이용해 주세요.');
      this.$router.replace('/login');
    }
  }

  async logout(): Promise<void> {

    const pa = {
      userId: userStore.userId,
    };
    try {
      const response = await userApi.logout(pa);
      if (response.code === 200) {
        alert('로그아웃 되었습니다.');
        userStore.updateUserIdStr('');
        UserStoreUtils.clearAll();
        await this.$router.replace('/');
      }
      console.log(response);
    } catch (e) {
      console.log(e);
      alert(e);
    }
  }
}
</script>

<style scoped>
.serviceDiv {

}
</style>
