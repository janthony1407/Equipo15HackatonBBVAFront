export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "pe.appbbva"
  },
  /*apiGateway: {
    REGION: "us-east-1",
    URL: "https://5by75p4gn3.execute-api.us-east-1.amazonaws.com/prod"
  },*/
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_NneAOEyEl",
    APP_CLIENT_ID: "4qsmnc5fl8oh28e4ljfo9bavqs",
    IDENTITY_POOL_ID: "us-east-1:de0d0bd2-212a-45d7-8f5a-a0e7d135a69c"
  },
  social: {
    //FB: "3896208840425483"
    FB:"380167766373708"
  }
};
