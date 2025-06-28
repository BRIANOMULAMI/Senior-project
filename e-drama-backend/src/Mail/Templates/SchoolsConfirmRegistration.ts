export const schoolWelcomeEmailHTML = (
  schoolName: string,
  competitionName: string,
  competitionDate: string,
  venue: string
): string => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Competition Registration Confirmation</title>
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f4f7fb;
        padding: 40px 20px;
        color: #2d3748;
      }
      .email-container {
        background-color: #ffffff;
        padding: 40px 30px;
        border-radius: 12px;
        max-width: 600px;
        margin: auto;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
        border-top: 6px solid #38a169;
      }
      h1 {
        color: #2f855a;
        font-size: 1.75rem;
      }
      p {
        line-height: 1.7;
        margin-bottom: 15px;
      }
      .highlight {
        background-color: #f0fff4;
        padding: 15px 20px;
        border-radius: 8px;
        border-left: 4px solid #38a169;
        margin: 20px 0;
      }
      .footer {
        margin-top: 40px;
        font-size: 0.85rem;
        color: #718096;
        text-align: center;
      }
      .tag {
        display: inline-block;
        background-color: #38a169;
        color: #fff;
        padding: 4px 10px;
        border-radius: 4px;
        font-size: 0.75rem;
        margin-top: 8px;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <h1>Dear ${schoolName},</h1>
      <p>We’re excited to confirm that your school has been successfully registered for an upcoming competition on the <strong>E-Music Platform</strong>.</p>

      <div class="highlight">
        <p><strong>Competition:</strong> ${competitionName}</p>
        <p><strong>Date:</strong> ${competitionDate}</p>
        <p><strong>Venue:</strong> ${venue}</p>
        <span class="tag">Registration Confirmed</span>
      </div>

      <p>We're thrilled to have your school participate. Please ensure your team is well-prepared for the event. More details and updates will follow as the date approaches.</p>
      
      <p>If you have any questions or require further assistance, feel free to reach out to us.</p>

      <p>Best wishes,<br/>The E-Music Team</p>

      <div class="footer">
        &copy; ${new Date().getFullYear()} E-Music. All rights reserved.
      </div>
    </div>
  </body>
  </html>
`;
