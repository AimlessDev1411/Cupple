const nodemailer = require('nodemailer')
const { MAIL_USER, MAIL_PASSWORD } = require('../config/config')

const htmlWelcome = `<!DOCTYPE >
<html >

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Inter:wght@400;600&display=swap" rel="stylesheet">
	<title>¡Bienvenido!</title>
	<style type="text/css">
		body {
			Margin: 0;
			padding: 0;
			background-color: #ffffff;
		}

		table {
			border-spacing: 0;
		}

		td {
			padding: 0;
		}

		img {
			border: 0;
		}

		p {
			font-family: 'Inter', sans-serif;
			padding: 0;
			margin: 0;
		}

		.wrapper {
			width: 100%;
			table-layout: fixed;
			background-color: #ffffff;
			padding-bottom: 40px;

		}

		.webkit {
			max-width: 600px;
			background-color: #DBEDF8;
		}


		.outer {
			Margin: 0 auto;
			width: 100%;
			max-width: 600px;
			border-spacing: 0;
			font-family: sans-serif;
			color: #4a4a4a;
		}

		.two-columns {
			text-align: center;
			font-size: 0;
			padding-top: 40px;
			padding-bottom: 30px;
		}


		.two-columns .column {
			width: 100%;
			max-width: 300px;
			display: inline-block;
			vertical-align: top;
		}

		.two-columns .column-border {
			width: 100%;
			max-width: 288px;
			display: inline-block;
			vertical-align: top;
		}

		.padding {
			padding: 15px;
		}

		.two-columns .content {
			font-size: 15px;
			line-height: 20px;
			/* background-color: blue; */
		}

		a {
			text-decoration: none;
		}

		.container {
			width: 300px;
			max-width: 300px;
			text-align: center;
		}

		.container__rigth {
			text-align: right;
		}


		.container__left {
			text-align: left;
		}

    .text-container {
      text-align: center;
      padding-top: 56px;
      padding-bottom: 46px;
      padding-left: 48px;
      padding-right: 48px;
    }
    .primary-btn {
      display: inline-block;
      font-family: 'Inter', sans-serif;
      padding: 6px 18px;
      gap: 2px;
      width: 135px;
      height: 32px;
      background-color: #C8E3F4;
      border-radius: 2px;
      color: #ffffff;
      font-weight: 400;
      font-size: 14px;
      line-height: 32px;
    }

		@media screen and (max-width: 600px) {

			.container {
				text-align: center;
			}
      .text-container {
        text-align: left;
        padding-top: 56px;
        padding-bottom: 46px;
        padding-left: 12px;
        padding-right: 12px;
      }
      .primary-btn {
        display: inline-block;
        font-family: 'Inter', sans-serif;
        padding: 10px 18px;
        gap: 2px;
        width: 312px;
        height: 40px;
        background-color: #C8E3F4;
        align-items: center;
        border-radius: 2px;
        color: #ffffff;
        font-weight: 400;
        font-size: 14px;
        line-height: 40px;
      }
      p {
        text-align: start;
      }
		}

		@media screen and (max-width: 400px) {}

    .title__card{
        color: #ffffff;
        font-family: 'Inter', sans-serif;
        font-size: 24px;
        font-weight: 800;

    }
	</style>
</head>

<body>

	<center class="wrapper">
		<div class="webkit">
			<table class="outer" align="center">
				<tr>
					<td>
						<table width="100%" style="border-spacing: 0;">
							<tr>
								<td style="background-color: #B6DAF0; padding: 10px; text-align: center;">
									<span class="title__card">Cupple</span>
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr>
					<td>
						<table width="100%" style="border-spacing: 0; padding-left: 12px; padding-right: 12px; ">
							<tr style="background-color: #ffffff;">
								<td class="text-container">
                  <p style="font-size: 24px; font-weight: 600; line-height: 140%; color: #2F4889; margin-top: 16px; margin-bottom: 12px;">
                    ¡Bienvenido!
                  </p>
                  <p style="font-style: normal; font-weight: 400; font-size: 14px; line-height: 140%; color: #66769F;">
                    Esperamos que disfrutes de nuestra plataforma.
                  </p>
								</td>
							</tr>
              <tr style="background-color: #ffffff;">
                <td style="padding-bottom: 32px; text-align: center;">
                  <a href="https://www.google.com/" class="primary-btn">
                    Iniciar sesion
                  </a>
                </td>
              </tr>
              <tr>
                <td style="background-color: #ffffff; padding-bottom: 46px; text-align: center; padding-left: 12px; padding-right: 12px;">
                  <p style="font-weight: 600; font-size: 14px; line-height: 140%; letter-spacing: 0.03em; color: #66769F;">ATENTAMENTE</p>
                  <p style="font-weight: 400; font-size: 14px; line-height: 140%; color: #66769F;">El equipo de Cupple</p>
                </td>
              </tr>
						</table>
					</td>
				</tr>

			</table>
			<div
				style="padding: 40px 24px; padding-bottom: 48px; font-weight: 400; font-size: 12px; line-height: 140%; text-align: center; color: #66769F;">
				<p style="font-family: 'DM Sans', sans-serif; font-weight: 400; font-size: 14px; line-height: 140%; padding-bottom: 4px;">
          Copyright &copy; 2023. Cupple. Todos los derechos reservados.
        </p>
			</div>
		</div>
	</center>
</body>

</html>`
const sendEmails = {
    welcome: (email) => {
        var message = {
            from: MAIL_USER,
            to: email,
            subject: "Bienvenido a Cupple",
            text: "Plaintext version of the message",
            html: htmlWelcome
        };
    
        var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: MAIL_USER,
                pass: MAIL_PASSWORD
            }
        })
        
        
        transporter.sendMail(message, (error, info) => {
            if (error) {
                console.log("Error enviando email")
                console.log(error.message)
            } else {
                console.log("Email enviado")
            }
        })
    }
}

module.exports = sendEmails