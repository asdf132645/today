<template>
  <div>
    <div class="loginLogo">
      Today Solve
    </div>
    <MainBody>
      <div class='borderBox'>
        <div v-if="noLoginPage" class="text-center">
          <div class="mb-8 strongText">
            반가워요! <br>
            로그인 방법을 선택해주세요.!
          </div>
          <v-btn class="mr-3" @click="generalUser()">회원 로그인</v-btn>
          <v-btn @click="companyUser()">업체 로그인</v-btn>
        </div>
        <div v-else>
          <div class="mb-5">
            <div class="login-title">
              {{ company ? '업체' : '' }} 이메일
            </div>
            <input class="login-input" type="text"/>
            <div class="login-title mt-2">
              비밀번호
            </div>
            <input class="login-input" type="text"/>
          </div>
          <button class="loginGo">로그인</button>
          <p v-if="company">
            <router-link to="">
              아직 업체 회원이 아니세요?
            </router-link>
          </p>
          <p v-else>
            <router-link to="">
              아직 회원이 아니세요?
            </router-link>
          </p>
          <v-btn @click="loginBackBtn()">뒤로가기</v-btn>
        </div>
      </div>


    </MainBody>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import PageTitleBar from "~/components/layout/PageTitleBar.vue";
import MainBody from '~/components/layout/MainBody.vue';

@Component({
  components: {PageTitleBar, MainBody}
})
export default class Login extends Vue {
  company: boolean = false;
  noLoginPage: boolean = true;

  generalUser(): void {
    this.company = false;
    this.noLoginPage = false;
  }

  companyUser(): void {
    this.company = true;
    this.noLoginPage = false;
  }

  loginBackBtn(): void {
    this.noLoginPage = true;
  }
}
</script>

<style scoped>
.login-input {
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border: 1px solid #d4d4d4;
  color: #000;
  background: #fff;
  border-radius: 4px;
  letter-spacing: -1px;
  box-sizing: border-box;
}

.borderBox {
  padding: 56px 80px;
  border: 1px solid #e4e5ed;
  width: 100%;
}

.login-title::after {
  position: relative;
  left: 2px;
  top: -2px;
  content: "*";
  color: rgb(255, 114, 98);
}

.login-title {
  font-size: 16px;
  color: rgb(85, 89, 105);
  margin-bottom: 8px;
  position: relative;
}

.strongText {
  font-size: 1.5rem;
  font-weight: 700;
}

.loginLogo {
  text-align: center;
  font-weight: 600;
  color: #00848a;
  font-size: 1.5rem;
  margin: 25% 0px 20px 0px;
}

.loginGo {
  background: #00848a;
  color: #ffffff;
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  font-size: 1.2rem;
  border-radius: 5px;
  margin-bottom: 10%;
}
</style>
