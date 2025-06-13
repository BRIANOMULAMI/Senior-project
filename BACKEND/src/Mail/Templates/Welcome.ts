export const welcomeEmailHTML = (schoolName: string): string => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Welcome to E-Music</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f4f4;
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
      color: #2f855a;
    }
    p {
      line-height: 1.6;
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
    <h1>Welcome to E-Music, ${schoolName}!</h1>
    <p>We're excited to have you join our platform. Your school has been successfully registered.</p>
    <p>You can now access our services and start enjoying the benefits of being part of our ecosystem.</p>
    <p>If you ever have questions, feel free to reach out to our support team.</p>
    <p>Best regards,<br/>The E-Music Team</p>
    <div class="footer">
      &copy; ${new Date().getFullYear()} E-Music. All rights reserved.
    </div>
  </div>
</body>
</html>
`;
