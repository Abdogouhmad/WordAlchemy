import nodemailer from 'nodemailer';

export const sendConfirmationEmail = async (email, token) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'adil2mae@gmail.com', // Replace with your email
			pass: 'btxo htzr gqdw dryy ' // Replace with your email password
		}
	});

	const confirmationLink = `https://word-alchemy-git-adil-work-space-adilma53.vercel.app/confirm/${token}`;

	const mailOptions = {
		from: 'adil2mae@gmail.com',
		to: email,
		subject: 'Word Alchemy Account Confirmation',
		text: `Please click the following link to confirm your email: ${confirmationLink}`
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		console.log('Email sent ->', info.response);
	} catch (error) {
		console.error('Error sending email ->', error);
		// Handle email sending error if needed
	}
};
// -------------------------------------------------------------------------------
export const sendResetPasswordEmail = async (email, token) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'adil2mae@gmail.com', // Replace with your email
			pass: 'btxo htzr gqdw dryy ' // Replace with your email password
		}
	});

	const resetLink = `https://word-alchemy-git-adil-work-space-adilma53.vercel.app/forgotpass/${token}`;

	const mailOptions = {
		from: 'adil2mae@gmail.com',
		to: email,
		subject: 'Word Alchemy Account Confirmation',
		text: `Please click the following link to confirm your email: ${resetLink}`
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		console.log('Email sent ->', info.response);
	} catch (error) {
		console.error('Error sending email ->', error);
		// Handle email sending error if needed
	}
};
