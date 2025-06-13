import { MailtrapClient } from "mailtrap";
const token = process.env.MAILTRAP_TOKEN as string;
export const mailTrapClient = new MailtrapClient({
  token,
});

export const Sender = {
  email: "info@gklelei.online",
  name: "E-Music",
};

interface sender {
  email: string;
  name: string;
}
interface Recipient {
  email: string;
}
export interface MailPayload {
  sender: sender;
  recepient: Recipient[];
  subject: string;
  html: string;
}
