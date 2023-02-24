import {login} from "~/common/api/service/user/dto/userApiDto";

export const apiConstants = {
  board: {
    list:'/users',
  },
  sendSms: {
    send:'/user/sendSms',
    checkSms:'/user/checkSms'
  },
  user:{
    create: '/user/create',
    login: '/auth/login',
  }
}
