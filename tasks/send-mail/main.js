export default async function(params, context) {
  const filePaths = params.attachments;
  const mailer = params.mailer;
  try {
    let attachments;
    if (filePaths) {
      attachments = filePaths.map(filePath => ({
        fileName: filePath.split('/').pop,
        path: filePath
      }))
    }
    const info = await mailer.sendMail({
      from: params.from,
      to: params.to,
      subject: params.subject,
      text: params.text,
      attachments: attachments
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