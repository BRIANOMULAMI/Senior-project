export const welcomeJudgeEmailHTML = (
  name: string,
  email: string,
  password: string
): string => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Welcome to Judges Portal</title>
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f9f9f9;
        padding: 40px 20px;
        color: #333;
      }
      .email-container {
        background-color: #ffffff;
        padding: 30px;
        border-radius: 10px;
        max-width: 600px;
        margin: auto;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      h1 {
        color: #2c5282;
      }
      p {
        line-height: 1.6;
      }
      .credentials {
        background-color: #edf2f7;
        padding: 15px;
        border-radius: 8px;
        margin: 20px 0;
        font-family: monospace;
      }
      .footer {
        margin-top: 30px;
        font-size: 0.85rem;
        color: #888;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <h1>Welcome Judge: ${name},</h1>
      <p>You’ve been successfully registered as a Judge on the E-Music platform.</p>
      <p>Here are your credentials to log in to the <strong>Judges Portal</strong>:</p>
      <div class="credentials">
        Email: ${email}<br/>
        Password: ${password}
      </div>
      <p>Please keep these credentials secure. You can log in and start managing your evaluations at your convenience.</p>
      <p>We're glad to have you onboard!</p>
      <p>Warm regards,<br/>The E-Music Team</p>
      <div class="footer">
        &copy; ${new Date().getFullYear()} E-Music. All rights reserved.
      </div>
    </div>
  </body>
  </html>
  `;
