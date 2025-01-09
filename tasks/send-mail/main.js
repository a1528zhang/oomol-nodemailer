export default async function(params, context) {
  const mailer = params.mailer;
  try {
    const info = await mailer.sendMail({
      from: params.from,
      to: params.to,
      subject: params.subject,
      text: params.text
    })
    console.log(info);
    return {
      output: "ok"
    }
  } catch (err) {
    console.error(err);
    throw err
  }
}