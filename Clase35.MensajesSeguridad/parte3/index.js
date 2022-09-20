import twilio from "twilio";

const accountSid = "AC6fcf3c8785d9518903f0dc25179c651a";
const authToken = "08e9aaaef82e71b54135df9e7ff83a69";
const body = process.argv[2];
const to = process.argv[3];

const client = twilio(accountSid, authToken);

const options = {
  body,
  from: "+16184278182",
  to,
};

try {
  const message = await client.messages.create(options);
  console.log(message);
} catch (err) {
  console.log(err);
}
