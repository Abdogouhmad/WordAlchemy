import nodemailer from 'nodemailer';
import { EMAIL, PASSWORD } from '$env/static/private';
//import fs from 'fs/promises';

const EmailConfig = {
	service: 'gmail',
	auth: {
		user: EMAIL,
		pass: PASSWORD
	}
};

export const ConfirmEmail = async (email, username, token) => {
	const emailaccount = nodemailer.createTransport(EmailConfig);
	const LinkConfirmation = `https://word-alchemy-git-v4-div-styl.vercel.app/auth/confirm/${token}`;

	const mail = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <title></title>

    <style type="text/css">
      @media only screen and (min-width: 620px) {
        .u-row {
          width: 600px !important;
        }
        .u-row .u-col {
          vertical-align: top;
        }

        .u-row .u-col-100 {
          width: 600px !important;
        }
      }

      @media (max-width: 620px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        .u-row .u-col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
        .u-row {
          width: 100% !important;
        }
        .u-col {
          width: 100% !important;
        }
        .u-col > div {
          margin: 0 auto;
        }
      }
      body {
        margin: 0;
        padding: 0;
      }

      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }

      p {
        margin: 0;
      }

      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors="true"] {
        color: inherit !important;
        text-decoration: none !important;
      }

      table,
      td {
        color: #000000;
      }
      #u_body a {
        color: #0000ee;
        text-decoration: underline;
      }
      @media (max-width: 480px) {
        #u_content_heading_1 .v-container-padding-padding {
          padding: 10px 10px 20px !important;
        }
        #u_content_heading_1 .v-font-size {
          font-size: 22px !important;
        }
        #u_content_button_1 .v-container-padding-padding {
          padding: 30px 10px 40px !important;
        }
        #u_content_button_1 .v-button-colors {
          color: #ffffff !important;
          background-color: #0f52a4 !important;
        }
        #u_content_button_1 .v-button-colors:hover {
          color: #ffffff !important;
          background-color: #3aaee0 !important;
        }
        #u_content_button_1 .v-size-width {
          width: auto !important;
        }
        #u_column_3 .v-col-background-color {
          background-color: #ffffff !important;
        }
      }
    </style>

    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
  </head>

  <body
    class="clean-body u_body"
    style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #f9f9ff;
      color: #000000;
    "
  >
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table
      id="u_body"
      style="
        border-collapse: collapse;
        table-layout: fixed;
        border-spacing: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        vertical-align: top;
        min-width: 320px;
        margin: 0 auto;
        background-color: #f9f9ff;
        width: 100%;
      "
      cellpadding="0"
      cellspacing="0"
    >
      <tbody>
        <tr style="vertical-align: top">
          <td
            style="
              word-break: break-word;
              border-collapse: collapse !important;
              vertical-align: top;
            "
          >
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9ff;"><![endif]-->

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      class="v-col-background-color"
                      style="
                        background-color: #ffffff;
                        height: 100%;
                        width: 100% !important;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <img
                                        align="center"
                                        border="0"
                                        src="https://assets.unlayer.com/stock-templates/1703939879464-wordalchemy(1).png"
                                        alt=""
                                        title=""
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 100%;
                                          max-width: 580px;
                                        "
                                        width="580"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          id="u_content_heading_1"
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 10px 30px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <!--[if mso]><table width="100%"><tr><td><![endif]-->
                                <h1
                                  class="v-font-size"
                                  style="
                                    margin: 0px;
                                    line-height: 140%;
                                    text-align: center;
                                    word-wrap: break-word;
                                    font-size: 28px;
                                    font-weight: 400;
                                  "
                                >
                                  <span
                                    ><span
                                      ><span
                                        ><span
                                          ><span
                                            ><span
                                              ><strong
                                                >Email verification</strong
                                              ></span
                                            ></span
                                          ></span
                                        ></span
                                      ></span
                                    ></span
                                  >
                                </h1>
                                <!--[if mso]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-font-size"
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="line-height: 140%">
                                    <strong>Dear</strong>
                                    <strong>${username}</strong>,
                                  </p>
                                  <p style="line-height: 140%">
                                    <span style="line-height: 19.6px"
                                      >You're almost set to start enjoying
                                      <strong>WorldAlchemy</strong>. Simply click the link
                                      below to verify your email address and get
                                      started. The link expires in 48
                                      hours.</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          id="u_content_button_1"
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 30px 10px 40px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <!--[if mso
                                  ]><style>
                                    .v-button {
                                      background: transparent !important;
                                    }
                                  </style><!
                                [endif]-->
                                <div align="center">
                                  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${LinkConfirmation}" style="height:37px; v-text-anchor:middle; width:220px;" arcsize="67.5%"  stroke="f" fillcolor="#0f52a4"><w:anchorlock/><center style="color:#ffffff;"><![endif]-->
                                  <a
                                    href="${LinkConfirmation}"
                                    target="_blank"
                                    class="v-button v-size-width v-button-colors v-font-size"
                                    style="
                                      box-sizing: border-box;
                                      display: inline-block;
                                      text-decoration: none;
                                      -webkit-text-size-adjust: none;
                                      text-align: center;
                                      color: #ffffff;
                                      background-color: #0f52a4;
                                      border-radius: 25px;
                                      -webkit-border-radius: 25px;
                                      -moz-border-radius: 25px;
                                      width: 38%;
                                      max-width: 100%;
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      word-wrap: break-word;
                                      mso-border-alt: none;
                                      border-top-width: 0px;
                                      border-top-style: solid;
                                      border-top-color: #ccc;
                                      border-left-width: 0px;
                                      border-left-style: solid;
                                      border-left-color: #ccc;
                                      border-right-width: 0px;
                                      border-right-style: solid;
                                      border-right-color: #ccc;
                                      border-bottom-width: 0px;
                                      border-bottom-style: solid;
                                      border-bottom-color: #ccc;
                                      font-size: 14px;
                                    "
                                  >
                                    <span
                                      style="
                                        display: block;
                                        padding: 10px 20px;
                                        line-height: 120%;
                                      "
                                      ><strong>Verify Me</strong></span
                                    >
                                  </a>
                                  <!--[if mso]></center></v:roundrect><![endif]-->
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="width: 600px;padding: 10px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                  <div
                    id="u_column_3"
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      class="v-col-background-color"
                      style="
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 10px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  height="0px"
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    border-spacing: 0;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    vertical-align: top;
                                    border-top: 1px solid #bbbbbb;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <tbody>
                                    <tr style="vertical-align: top">
                                      <td
                                        style="
                                          word-break: break-word;
                                          border-collapse: collapse !important;
                                          vertical-align: top;
                                          font-size: 0px;
                                          line-height: 0px;
                                          mso-line-height-rule: exactly;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <span>&#160;</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-font-size"
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="line-height: 140%">
                                    For any inquiries, please contact our
                                    support at
                                    <strong
                                      >[
                                      <a
                                        rel="noopener"
                                        href="mailto:gouhmada@gmail.com?subject=Email%20verification%20Issue"
                                        target="_blank"
                                        >gouhmada@gmail.com</a
                                      >
                                      ].</strong
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
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
		return {
			Emailsent: true
		};
	} catch (error) {
		console.error('Error sending email ->', error);
		return {
			EmailNotSent: true
		};
	}
};

// reset password email

export const sendResetPasswordEmail = async (email, token) => {
	const account = nodemailer.createTransport(EmailConfig);

	const updatelink = `http://localhost:5173/auth/update/${token}`;
	const mailt = `
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html
	  xmlns="http://www.w3.org/1999/xhtml"
	  xmlns:v="urn:schemas-microsoft-com:vml"
	  xmlns:o="urn:schemas-microsoft-com:office:office"
	>
	  <head>
		<!--[if gte mso 9]>
		  <xml>
			<o:OfficeDocumentSettings>
			  <o:AllowPNG />
			  <o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
		  </xml>
		<![endif]-->
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="x-apple-disable-message-reformatting" />
		<!--[if !mso]><!-->
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<!--<![endif]-->
		<title></title>
	
		<style type="text/css">
		  @media only screen and (min-width: 620px) {
			.u-row {
			  width: 600px !important;
			}
			.u-row .u-col {
			  vertical-align: top;
			}
	
			.u-row .u-col-100 {
			  width: 600px !important;
			}
		  }
	
		  @media (max-width: 620px) {
			.u-row-container {
			  max-width: 100% !important;
			  padding-left: 0px !important;
			  padding-right: 0px !important;
			}
			.u-row .u-col {
			  min-width: 320px !important;
			  max-width: 100% !important;
			  display: block !important;
			}
			.u-row {
			  width: 100% !important;
			}
			.u-col {
			  width: 100% !important;
			}
			.u-col > div {
			  margin: 0 auto;
			}
		  }
		  body {
			margin: 0;
			padding: 0;
		  }
	
		  table,
		  tr,
		  td {
			vertical-align: top;
			border-collapse: collapse;
		  }
	
		  p {
			margin: 0;
		  }
	
		  .ie-container table,
		  .mso-container table {
			table-layout: fixed;
		  }
	
		  * {
			line-height: inherit;
		  }
	
		  a[x-apple-data-detectors="true"] {
			color: inherit !important;
			text-decoration: none !important;
		  }
	
		  table,
		  td {
			color: #000000;
		  }
		  #u_body a {
			color: #0000ee;
			text-decoration: underline;
		  }
		  @media (max-width: 480px) {
			#u_content_heading_1 .v-container-padding-padding {
			  padding: 10px 10px 20px !important;
			}
			#u_content_heading_1 .v-font-size {
			  font-size: 22px !important;
			}
			#u_content_button_1 .v-container-padding-padding {
			  padding: 30px 10px 40px !important;
			}
			#u_content_button_1 .v-button-colors {
			  color: #ffffff !important;
			  background-color: #0f52a4 !important;
			}
			#u_content_button_1 .v-button-colors:hover {
			  color: #ffffff !important;
			  background-color: #3aaee0 !important;
			}
			#u_content_button_1 .v-size-width {
			  width: auto !important;
			}
			#u_column_3 .v-col-background-color {
			  background-color: #ffffff !important;
			}
		  }
		</style>
	
		<!--[if !mso]><!-->
		<link
		  href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
		  rel="stylesheet"
		  type="text/css"
		/>
		<!--<![endif]-->
	  </head>
	
	  <body
		class="clean-body u_body"
		style="
		  margin: 0;
		  padding: 0;
		  -webkit-text-size-adjust: 100%;
		  background-color: #f9f9ff;
		  color: #000000;
		"
	  >
		<!--[if IE]><div class="ie-container"><![endif]-->
		<!--[if mso]><div class="mso-container"><![endif]-->
		<table
		  id="u_body"
		  style="
			border-collapse: collapse;
			table-layout: fixed;
			border-spacing: 0;
			mso-table-lspace: 0pt;
			mso-table-rspace: 0pt;
			vertical-align: top;
			min-width: 320px;
			margin: 0 auto;
			background-color: #f9f9ff;
			width: 100%;
		  "
		  cellpadding="0"
		  cellspacing="0"
		>
		  <tbody>
			<tr style="vertical-align: top">
			  <td
				style="
				  word-break: break-word;
				  border-collapse: collapse !important;
				  vertical-align: top;
				"
			  >
				<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9ff;"><![endif]-->
	
				<div
				  class="u-row-container"
				  style="padding: 0px; background-color: transparent"
				>
				  <div
					class="u-row"
					style="
					  margin: 0 auto;
					  min-width: 320px;
					  max-width: 600px;
					  overflow-wrap: break-word;
					  word-wrap: break-word;
					  word-break: break-word;
					  background-color: transparent;
					"
				  >
					<div
					  style="
						border-collapse: collapse;
						display: table;
						width: 100%;
						height: 100%;
						background-color: transparent;
					  "
					>
					  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
	
					  <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
					  <div
						class="u-col u-col-100"
						style="
						  max-width: 320px;
						  min-width: 600px;
						  display: table-cell;
						  vertical-align: top;
						"
					  >
						<div
						  class="v-col-background-color"
						  style="
							background-color: #ffffff;
							height: 100%;
							width: 100% !important;
						  "
						>
						  <!--[if (!mso)&(!IE)]><!--><div
							style="
							  box-sizing: border-box;
							  height: 100%;
							  padding: 0px;
							  border-top: 0px solid transparent;
							  border-left: 0px solid transparent;
							  border-right: 0px solid transparent;
							  border-bottom: 0px solid transparent;
							"
						  ><!--<![endif]-->
							<table
							  style="font-family: 'Raleway', sans-serif"
							  role="presentation"
							  cellpadding="0"
							  cellspacing="0"
							  width="100%"
							  border="0"
							>
							  <tbody>
								<tr>
								  <td
									class="v-container-padding-padding"
									style="
									  overflow-wrap: break-word;
									  word-break: break-word;
									  padding: 10px;
									  font-family: 'Raleway', sans-serif;
									"
									align="left"
								  >
									<table
									  width="100%"
									  cellpadding="0"
									  cellspacing="0"
									  border="0"
									>
									  <tr>
										<td
										  style="
											padding-right: 0px;
											padding-left: 0px;
										  "
										  align="center"
										>
										  <img
											align="center"
											border="0"
											src="https://assets.unlayer.com/stock-templates/1703939879464-wordalchemy(1).png"
											alt=""
											title=""
											style="
											  outline: none;
											  text-decoration: none;
											  -ms-interpolation-mode: bicubic;
											  clear: both;
											  display: inline-block !important;
											  border: none;
											  height: auto;
											  float: none;
											  width: 100%;
											  max-width: 580px;
											"
											width="580"
										  />
										</td>
									  </tr>
									</table>
								  </td>
								</tr>
							  </tbody>
							</table>
	
							<table
							  id="u_content_heading_1"
							  style="font-family: 'Raleway', sans-serif"
							  role="presentation"
							  cellpadding="0"
							  cellspacing="0"
							  width="100%"
							  border="0"
							>
							  <tbody>
								<tr>
								  <td
									class="v-container-padding-padding"
									style="
									  overflow-wrap: break-word;
									  word-break: break-word;
									  padding: 10px 10px 30px;
									  font-family: 'Raleway', sans-serif;
									"
									align="left"
								  >
									<!--[if mso]><table width="100%"><tr><td><![endif]-->
									<h1
									  class="v-font-size"
									  style="
										margin: 0px;
										line-height: 140%;
										text-align: center;
										word-wrap: break-word;
										font-size: 28px;
										font-weight: 400;
									  "
									>
									  <span
										><span
										  ><span
											><span
											  ><span
												><strong
												  >Forget password ?</strong
												></span
											  ></span
											></span
										  ></span
										></span
									  >
									</h1>
									<!--[if mso]></td></tr></table><![endif]-->
								  </td>
								</tr>
							  </tbody>
							</table>
	
							<table
							  style="font-family: 'Raleway', sans-serif"
							  role="presentation"
							  cellpadding="0"
							  cellspacing="0"
							  width="100%"
							  border="0"
							>
							  <tbody>
								<tr>
								  <td
									class="v-container-padding-padding"
									style="
									  overflow-wrap: break-word;
									  word-break: break-word;
									  padding: 10px;
									  font-family: 'Raleway', sans-serif;
									"
									align="left"
								  >
									<div
									  class="v-font-size"
									  style="
										font-size: 14px;
										line-height: 140%;
										text-align: left;
										word-wrap: break-word;
									  "
									>
									  <p style="line-height: 140%">
										<strong>Dear</strong>
										<strong>${email}</strong>,
									  </p>
									  <p style="line-height: 140%">
										We hope this email finds you well.
									  </p>
									  <p style="line-height: 140%">
										A password reset request for your account
										on <strong>WorldAlchemy</strong> has been
										received.If you initiated this request,
										<strong
										  >click the button below to reset your
										  password:</strong
										>
									  </p>
									</div>
								  </td>
								</tr>
							  </tbody>
							</table>
	
							<table
							  id="u_content_button_1"
							  style="font-family: 'Raleway', sans-serif"
							  role="presentation"
							  cellpadding="0"
							  cellspacing="0"
							  width="100%"
							  border="0"
							>
							  <tbody>
								<tr>
								  <td
									class="v-container-padding-padding"
									style="
									  overflow-wrap: break-word;
									  word-break: break-word;
									  padding: 30px 10px 40px;
									  font-family: 'Raleway', sans-serif;
									"
									align="left"
								  >
									<!--[if mso
									  ]><style>
										.v-button {
										  background: transparent !important;
										}
									  </style><!
									[endif]-->
									<div align="center">
									  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${updatelink}" style="height:37px; v-text-anchor:middle; width:220px;" arcsize="67.5%"  stroke="f" fillcolor="#524acf"><w:anchorlock/><center style="color:#ffffff;"><![endif]-->
									  <a
										href="${updatelink}"
										target="_blank"
										class="v-button v-size-width v-button-colors v-font-size"
										style="
										  box-sizing: border-box;
										  display: inline-block;
										  text-decoration: none;
										  -webkit-text-size-adjust: none;
										  text-align: center;
										  color: #ffffff;
										  background-color: #524acf;
										  border-radius: 25px;
										  -webkit-border-radius: 25px;
										  -moz-border-radius: 25px;
										  width: 38%;
										  max-width: 100%;
										  overflow-wrap: break-word;
										  word-break: break-word;
										  word-wrap: break-word;
										  mso-border-alt: none;
										  border-top-width: 0px;
										  border-top-style: solid;
										  border-top-color: #ccc;
										  border-left-width: 0px;
										  border-left-style: solid;
										  border-left-color: #ccc;
										  border-right-width: 0px;
										  border-right-style: solid;
										  border-right-color: #ccc;
										  border-bottom-width: 0px;
										  border-bottom-style: solid;
										  border-bottom-color: #ccc;
										  font-size: 14px;
										"
									  >
										<span
										  style="
											display: block;
											padding: 10px 20px;
											line-height: 120%;
										  "
										  ><strong
											><span style="line-height: 16.8px"
											  >Reset Your Password</span
											></strong
										  ></span
										>
									  </a>
									  <!--[if mso]></center></v:roundrect><![endif]-->
									</div>
								  </td>
								</tr>
							  </tbody>
							</table>
	
							<!--[if (!mso)&(!IE)]><!-->
						  </div>
						  <!--<![endif]-->
						</div>
					  </div>
					  <!--[if (mso)|(IE)]></td><![endif]-->
					  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
					</div>
				  </div>
				</div>
	
				<div
				  class="u-row-container"
				  style="padding: 0px; background-color: transparent"
				>
				  <div
					class="u-row"
					style="
					  margin: 0 auto;
					  min-width: 320px;
					  max-width: 600px;
					  overflow-wrap: break-word;
					  word-wrap: break-word;
					  word-break: break-word;
					  background-color: transparent;
					"
				  >
					<div
					  style="
						border-collapse: collapse;
						display: table;
						width: 100%;
						height: 100%;
						background-color: transparent;
					  "
					>
					  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
	
					  <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="width: 600px;padding: 10px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
					  <div
						id="u_column_3"
						class="u-col u-col-100"
						style="
						  max-width: 320px;
						  min-width: 600px;
						  display: table-cell;
						  vertical-align: top;
						"
					  >
						<div
						  class="v-col-background-color"
						  style="
							height: 100%;
							width: 100% !important;
							border-radius: 0px;
							-webkit-border-radius: 0px;
							-moz-border-radius: 0px;
						  "
						>
						  <!--[if (!mso)&(!IE)]><!--><div
							style="
							  box-sizing: border-box;
							  height: 100%;
							  padding: 10px;
							  border-top: 0px solid transparent;
							  border-left: 0px solid transparent;
							  border-right: 0px solid transparent;
							  border-bottom: 0px solid transparent;
							  border-radius: 0px;
							  -webkit-border-radius: 0px;
							  -moz-border-radius: 0px;
							"
						  ><!--<![endif]-->
							<table
							  style="font-family: 'Raleway', sans-serif"
							  role="presentation"
							  cellpadding="0"
							  cellspacing="0"
							  width="100%"
							  border="0"
							>
							  <tbody>
								<tr>
								  <td
									class="v-container-padding-padding"
									style="
									  overflow-wrap: break-word;
									  word-break: break-word;
									  padding: 0px;
									  font-family: 'Raleway', sans-serif;
									"
									align="left"
								  >
									<table
									  height="0px"
									  align="center"
									  border="0"
									  cellpadding="0"
									  cellspacing="0"
									  width="100%"
									  style="
										border-collapse: collapse;
										table-layout: fixed;
										border-spacing: 0;
										mso-table-lspace: 0pt;
										mso-table-rspace: 0pt;
										vertical-align: top;
										border-top: 1px solid #bbbbbb;
										-ms-text-size-adjust: 100%;
										-webkit-text-size-adjust: 100%;
									  "
									>
									  <tbody>
										<tr style="vertical-align: top">
										  <td
											style="
											  word-break: break-word;
											  border-collapse: collapse !important;
											  vertical-align: top;
											  font-size: 0px;
											  line-height: 0px;
											  mso-line-height-rule: exactly;
											  -ms-text-size-adjust: 100%;
											  -webkit-text-size-adjust: 100%;
											"
										  >
											<span>&#160;</span>
										  </td>
										</tr>
									  </tbody>
									</table>
								  </td>
								</tr>
							  </tbody>
							</table>
	
							<table
							  style="font-family: 'Raleway', sans-serif"
							  role="presentation"
							  cellpadding="0"
							  cellspacing="0"
							  width="100%"
							  border="0"
							>
							  <tbody>
								<tr>
								  <td
									class="v-container-padding-padding"
									style="
									  overflow-wrap: break-word;
									  word-break: break-word;
									  padding: 10px;
									  font-family: 'Raleway', sans-serif;
									"
									align="left"
								  >
									<div
									  class="v-font-size"
									  style="
										font-size: 14px;
										line-height: 140%;
										text-align: left;
										word-wrap: break-word;
									  "
									>
									  <p style="line-height: 140%">
										If this was not you, kindly disregard this
										message. For any inquiries, please contact
										our support at
										<strong
										  >[
										  <a
											rel="noopener"
											href="mailto:gouhmada@gmail.com?subject=Reset%20Password%20Issue"
											target="_blank"
											>gouhmada@gmail.com</a
										  >
										  ].</strong
										>
									  </p>
									</div>
								  </td>
								</tr>
							  </tbody>
							</table>
	
							<!--[if (!mso)&(!IE)]><!-->
						  </div>
						  <!--<![endif]-->
						</div>
					  </div>
					  <!--[if (mso)|(IE)]></td><![endif]-->
					  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
					</div>
				  </div>
				</div>
	
				<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
			  </td>
			</tr>
		  </tbody>
		</table>
		<!--[if mso]></div><![endif]-->
		<!--[if IE]></div><![endif]-->
	  </body>
	</html>
	
	`;

	const mailOptions = {
		from: EMAIL,
		to: email,
		subject: 'Reset Password',
		html: mailt
	};

	try {
		const info = await account.sendMail(mailOptions);
		console.log('Email sent ----------->', info.response);
	} catch (error) {
		console.error('Error sending email ------->', error);
	}
};
// EOF