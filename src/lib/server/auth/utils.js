import nodemailer from 'nodemailer';
import fs from 'fs/promises';

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
		// text: `Please click the following link to confirm your email: ${confirmationLink}`

		// html: await fs.readFile(
		// 	'/home/adil/PROJECTS/PERSONAL/test/WordAlchemy/src/lib/assets/confirmation.html',
		// 	(err, data) => {
		// 		if (err) {
		// 			console.error('Error reading the file:', err);
		// 			return;
		// 		}

		// 		// Process the file content (in this example, just log it)
		// 		console.log(data);
		// 	}
		// )

		html: `
		<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    /* Manually inline Tailwind CSS styles for the h1 tag */
    .text-red-600 {
      color: #dc2626;
    }
    .text-3xl {
      font-size: 1.875rem; /* 30px */
    }
    .font-bold {
      font-weight: 700;
    }
    .underline {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1 class="text-red-600 text-3xl font-bold underline">Hello world!</h1>
</body>
</html>

		`
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
