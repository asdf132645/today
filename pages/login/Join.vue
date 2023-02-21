<template>
  <div>
    <div class="loginLogo">
      Today Solve
    </div>
    <MainBody>
      <div class='borderBox'>
        <div class="mb-8 strongText text-center">
          Today Solve 에서 <br>
          {{ company ? '고객을 찾아보세요!':'업체를 찾아보세요!' }}
        </div>
        <div>
          <div class="login-title">
            {{ company ? '업체' : '' }} 계좌번호
          </div>
          <input class="login-input" type="text"/>
          <div class="login-title mt-2" v-if="company">
            업체 사업자번호
          </div>
          <input class="login-input" type="text" v-if="company"/>
          <div class="login-title mt-2" >
            휴대폰번호
          </div>
          <div>
            <input class="login-input wid80" type="text" />
            <v-btn class="height20">인증번호 요청</v-btn>
          </div>
          <div class="login-title mt-2">
            {{ company ? '업체' : '' }} 이메일
          </div>
          <input class="login-input" type="text"/>
          <div class="login-title mt-2">
            비밀번호
          </div>
          <input class="login-input" type="text"/>
          <div class="login-title mt-2">
            {{ company ? '업체 담당자' : '이름' }}
          </div>
          <input class="login-input" type="text"/>
          <div class="login-title mt-2">
            {{ company ? '업체 연락처' : '연락처' }}
          </div>
          <input class="login-input" type="text"/>
        </div>
      </div>
    </MainBody>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";

import MainBody from '~/components/layout/MainBody.vue';

@Component({
  components: {MainBody}
})
export default class Join extends Vue {
  company: boolean = false;
  noLoginPage: boolean = true;

  mounted(): void {
    if (this.$route.query.company === 'true') {
      this.company = true;
    } else {
      this.company = false;
    }
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

input.login-input.wid80 {
  width: 63%;
  margin-right: 13px;
}

.height20{
  height: 45px;
  vertical-align: middle;
  position: relative;
  top: -3px;
}
</style>
