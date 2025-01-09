import nodemailer from "nodemailer"

export default async function(params, context) {
  const transporter = nodemailer.createTransport({
    host: params.smtpHost,
    port: params.port,
    auth: {
      user: params.user,
      pass: params.password,
    },
  });
  
  return {
    mailerObj: transporter,
    from: params.user,
  };
}