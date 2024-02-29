const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'bilalsaeedb@gmail.com',
		subject: 'Thank you for joining!',
		text: `Welcome to the app, ${name}! Let us know how you get along with the app.`
	})
}

const sendCancelationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'bilalsaeedb@gmail.com',
		subject: 'Cancelation confirmation.',
		text: `Hello, ${name}! We are sorry you're removing your account. Let us know what we can do better.`
	})
}

module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail
}