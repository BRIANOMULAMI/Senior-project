import { MailPayload, mailTrapClient } from "./mail";

export const SendMail = async ({
  html,
  recepient,
  sender,
  subject,
}: MailPayload) => {
  try {
    await mailTrapClient.send({
      from: sender,
      to: recepient,
      subject,
      html,
    });
  } catch (error) {
    console.log({ error });
  }
};
