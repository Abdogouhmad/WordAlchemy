import nodemailer from 'nodemailer';
import { EMAIL, PASSWORD } from '$env/static/private';
//import fs from 'fs/promises';

export const ConfirmEmail = async (email, token) => {
	const emailaccount = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: EMAIL,
			pass: PASSWORD
		}
	});
	console.log(EMAIL, PASSWORD);
	const LinkConfirmation = `http://localhost:5173/auth/confirm/${token}`;

	const mail = `
	<!DOCTYPE html>
	<html lang="en">
	  <head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Email Confirmation</title>
		<style>
		  body {
			  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			  background-color: #f3f4f6;
			  margin: 0;
			  padding: 0;
		  }
	
		  .main {
			  display: flex;
			  flex-direction: column;
			  align-items: center;
			  justify-content: center;
			  min-height: 100vh;
			  padding: 2rem;
			  background-color: #f3f4f6;
		  }
	
		  .card {
			  border: 1px solid #cbd5e0;
			  color: #1a202c;
			  width: 100%;
			  max-width: 28rem;
			  margin: 0 auto;
			  overflow: hidden;
			  border-radius: 0.75rem;
			  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
			  background-color: #ffffff;
		  }
	
		  .header {
			  display: flex;
			  flex-direction: column;
			  align-items: center;
			  justify-content: center;
			  font-weight: bold;
			  font-family: ;
			  padding: 1.5rem;
		  }
	
		  .header a svg {
			  width: 2.5rem;
			  height: 2.5rem;
			  fill: none;
			  stroke: #000000;
			  stroke-width: 2;
			  stroke-linecap: round;
			  stroke-linejoin: round;
		  }
	
		  .content {
			  padding: 1.5rem;
		  }
	
		  .content h2 {
			  font-size: 1.5rem;
			  font-weight: bold;
			  text-align: center;
		  }
	
		  .content p {
			  color: #4b5563;
			  text-align: center;
		  }
	
		  .button {
			  display: inline-flex;
			  align-items: center;
			  justify-content: center;
			  border-radius: 0.375rem;
			  font-size: 0.875rem;
			  font-weight: medium;
			  transition: background-color 0.2s;
			  outline: none;
			  cursor: pointer;
			  height: 2.5rem;
			  width: 100%;
			  background-color: #3b82f6;
			  color: #ffffff;
			  border: 1px solid transparent;
		  }
	
		  .button:hover {
			  background-color: #2563eb;
		  }
	
		  .button:disabled {
			  pointer-events: none;
			  opacity: 0.5;
		  }
		</style>
	  </head>
	
	  <body>
		<div class="main">
		  <div class="card">
			<div class="header">
			  <a href="https://word-alchemy-git-v4-div-styl.vercel.app/"> WordAlchemy </a>
			</div>
			<div class="content">
			  <h2>Email Confirmation</h2>
			  <p>
				Thank you for signing up! We need to verify your email address.
				Please click the button below to confirm.
			  </p>
			  <button class="button" disabled>
				<a href="${LinkConfirmation}">Confirm Email Address</a>
			  </button>
			</div>
		  </div>
		</div>
	  </body>
	</html>
	`;
	const mailOptions = {
		from: EMAIL,
		to: email,
		subject: 'Confirm Email',
		html: mail
	};

	try {
		const info = await emailaccount.sendMail(mailOptions);
		console.log('Email sent ->', info.response);
	} catch (error) {
		console.error('Error sending email ->', error);
	}
};
