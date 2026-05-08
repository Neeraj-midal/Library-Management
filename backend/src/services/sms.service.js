import axios from "axios";

export const sendSMS = async (phone, message) => {
  console.log(`sending SMS to ${phone}:${message}`);

  await axios.post(
    "https://wwww.fast2sms.com/dev/bulkV2",
    {
      route: "q",
      message,
      language: "english",
      number: phone,
    },
    {
      headers: {
        authorization: process.env.FAST2SMS_API_KEY,
      },
    },
  );
};
