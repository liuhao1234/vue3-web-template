export default [
  {
    url: '/api/login',
    method: 'post',
    response: ({ query }) => {
      return {
        code: 200,
        data: {
          name: 'liuhao1234',
        },
      }
    },
  },
  {
    url: '/api/searchVerifyCode',
    method: 'post',
    response: {
      code: 0,
      data: {
        name: 'vben',
      },
    },
  }
]