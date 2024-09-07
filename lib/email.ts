import emailjs from '@emailjs/browser';

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

export const emailjsInit = () => {
  emailjs.init({
    publicKey: PUBLIC_KEY,
  });
};

export const emailjsSend = (values = {}) => {
  return emailjs.send(SERVICE_ID!, TEMPLATE_ID!, values);
};
