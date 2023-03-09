export const apiConstants = {
  auth: {
    refresh: {
      endpoint: '/auth/refresh',
      requiresToken: false,
    },
  },
  board: {
    list: {
      endpoint: '/users',
      requiresToken: false,
    },
  },
  sendSms: {
    send: {
      endpoint: '/user/sendSms',
      requiresToken: false,
    },
    checkSms: {
      endpoint: '/user/checkSms',
      requiresToken: false,
    }
  },
  user: {
    create: {
      endpoint: '/user/create',
      requiresToken: false
    },
    login: {
      endpoint: '/auth/login',
      requiresToken: false
    },
    myPage: {endpoint: '/user/myPage', requiresToken: false},
    logout: {endpoint: '/auth/logout', requiresToken: true,},
  },
  company: {
    list: {
      endpoint: '/company/companyList',
      requiresToken: false,
    },
    detail:{
      endpoint:'/company',
      requiresToken: false,
    }
  }
};
