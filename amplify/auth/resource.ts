import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle:"CODE",
      verificationEmailSubject:"Chào mừng Quý Khách đến với ngân hàng HDBank!",
      verificationEmailBody:(createCode) =>
        `Xin hãy sử dụng mã ${createCode()} để xác thực tài khoản của bạn.`,
    },
  },
});
