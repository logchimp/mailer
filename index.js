const mailgun = require('mailgun-js');

class Mail {
  constructor(apiKey, domain) {
    const mg = mailgun({ apiKey, domain });

    this.service = "mailgun";
    this.mailgun = mg;
	}

	async send(data) {
    return this.mailgun.messages().send(data).then(response => {
      return response;
    }).catch(error => {
      return error;
    });
	}
}

module.exports = Mail;
