<template>
  <div>
    <div class="loginLogo">
      Today Solve
    </div>
    <MainBody>
      <div class='borderBox'>
        <div class="mb-8 strongText text-center">
          Today Solve 에서 <br>
          {{ company ? '고객을 찾아보세요!' : '업체를 찾아보세요!' }}
        </div>
        <div>
          <div class="divLine">
            <div class="login-title">
              {{ company ? '업체' : '' }} 계좌번호
            </div>
            <input v-model="accountNumber" class="login-input" type="text"/>
            <div class="login-title mt-2">
              {{ company ? '업체' : '' }} 은행명
            </div>
            <input v-model="accountName" class="login-input" type="text">
          </div>

          <div v-if="company" class="divLine">
            <div class="login-title mt-2">
              업체 사업자번호
            </div>
            <input v-model="businessNumber" class="login-input" type="text"/>
          </div>

          <div class="divLine">
            <div class="login-title mt-2">
              휴대폰번호
            </div>
            <div>
              <input v-model="phoneNumber" class="login-input wid80" type="text" :disabled="phoneNumComplete"/>
              <v-btn class="height20" :disabled="phoneNumComplete" @click="smsCertification">인증번호 요청</v-btn>
              <div v-if="checkInput" class="mt-2">
                <input v-model="phoneNumCheck" class="login-input wid80" type="text"/>
                <v-btn class="height20" @click="smsCheck">확인</v-btn>
              </div>
            </div>
          </div>

          <div class="divLine">
            <div class="login-title mt-2">
              {{ company ? '업체' : '' }} 이메일
            </div>
            <input v-model="email" class="login-input" type="text"/>
          </div>

          <div class="divLine">
            <div class="login-title mt-2">
              비밀번호
            </div>
            <input v-model="password" class="login-input" type="text"/>
          </div>

          <div class="divLine">
            <div class="login-title mt-2">
              {{ company ? '업체 담당자' : '이름' }}
            </div>
            <input v-model="userName" class="login-input" type="text"/>
          </div>
          <div class="divLine">
            <div class="login-title mt-2">
              ID
            </div>
            <input v-model="userId" class="login-input" type="text"/>
          </div>


          <div class="divLine">
            <div v-if="company" class="login-title mt-2">
              서비스 분야
            </div>
            <input v-if="company" v-model="service" class="login-input" type="text">
          </div>

          <button class="loginGo mt-3" @click="joinApplication">가입신청</button>
        </div>
      </div>
    </MainBody>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";

import MainBody from '~/components/layout/MainBody.vue';
import {smsApi} from "~/common/api/service/sms/smsApi";
import {userApi} from '~/common/api/service/user/userApi';


@Component({
  components: {MainBody}
})
export default class Join extends Vue {
  userId: string = '';
  userName: string = '';
  email: string = '';
  password: string = '';
  role: string = '';
  phoneNumber: string = '';
  accountNumber: string = '';
  accountName: string = '';
  businessNumber: string = '';
  service: string = '';

  phoneNumComplete: boolean = false;
  checkInput: boolean = false;
  phoneNumCheck: string = '';
  company: boolean = false;
  noLoginPage: boolean = true;
  sevice: string[] = ['1', '2'];

  sessces: boolean = false;


  mounted(): void {
    if (this.$route.query.company === 'true') {
      this.company = true;
    } else {
      this.company = false;
    }
  }

  async smsCertification(): Promise<void> {

    // smsApi.send
    const pa = {
      phoneNumber: this.phoneNumber,
    };
    try {
      const result = await smsApi.send(pa);
      this.phoneNumComplete = true;
      this.checkInput = true;
      alert('문자가 발송되었습니다. 문자함을 확인 해주세요.');
      console.log(result);
    } catch (e) {
      console.log(e);
    }

  }

  async smsCheck(): Promise<void> {
    // smsCheck
    const sms = {
      phoneNumber: this.phoneNumber,
      inputNumber: this.phoneNumCheck,
    };
    try {
      const result = await smsApi.smsCheck(sms);
      if (result) {
        alert('인증이 완료되었습니다.');
        this.sessces = true;
        this.checkInput = false;
      }
      console.log(result);
    } catch (e) {
      this.sessces = false;
      console.log(e);
    }
  }

  async joinApplication(): Promise<void> {

    if (!this.sessces) {
      alert('휴대폰 인증을 해주세요.');
    } else {
      const user = {
        user_id: this.userId,
        userName: this.userName,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        businessNumber: this.businessNumber,
        service: this.service,
        accountNumber: this.accountNumber,
        accountName: this.accountName,
        role: this.company ? 'company': 'general',
      };


      try {
        const result =  await userApi.createUser(user);
        if (result) {
          console.log(result);
          alert('가입되었습니다.');
          await this.$router.push('/');
        }

      } catch (e) {

        console.log(e);
      }
      // console.log(result)
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

.height20 {
  height: 45px;
  vertical-align: middle;
  position: relative;
  top: -3px;
}
</style>
