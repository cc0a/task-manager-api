const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'james@keetc.com',
        subject: 'Thanks for joining up!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'james@keetc.com',
        subject: 'Sorry to See You Go',
        text: `We\'re sorry to see you go, ${name}. Please let us know if you have any suggestions for us. Thanks!`
    })
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
};










// email send test
// sgMail.send({
//    to: 'james@keetc.com',
//    from: 'james@keetc.com',
//    subject: 'FORWARD',
//    text: 'We are trudging on bro!'
// });

