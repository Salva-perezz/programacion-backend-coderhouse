import twilio from "twilio";

const accountSid = "AC6fcf3c8785d9518903f0dc25179c651a";
const authToken = "08e9aaaef82e71b54135df9e7ff83a69";
const body = process.argv[2];
const to = process.argv[3];

const client = twilio(accountSid, authToken);
console.log(to);
const options = {
  body,
  mediaUrl: [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kinja-img.com%2Fgawker-media%2Fimage%2Fupload%2Fs--UzcqSr8_--%2Fc_fill%2Cfl_progressive%2Cg_center%2Ch_900%2Cq_80%2Cw_1600%2F18mpenleoksq8jpg.jpg&f=1&nofb=1",
  ],
  from: "whatsapp:+14155238886",
  to: `whatsapp:${to}`,
};

try {
  const message = await client.messages.create(options);

  console.log(message);
} catch (error) {
  console.log(error);
}
