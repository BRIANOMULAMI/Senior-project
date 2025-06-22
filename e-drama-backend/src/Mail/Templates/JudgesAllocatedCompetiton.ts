export const allocatedCompetitionEmailHTML = (
  name: string,
  competitionName: string,
  competitionDate: string,
  venue: string
): string => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Competition Allocation Notice</title>
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
        border-top: 6px solid #2c5282;
      }
      h1 {
        color: #2c5282;
        font-size: 1.75rem;
      }
      p {
        line-height: 1.7;
        margin-bottom: 15px;
      }
      .highlight {
        background-color: #ebf8ff;
        padding: 15px 20px;
        border-radius: 8px;
        border-left: 4px solid #3182ce;
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
        background-color: #2c5282;
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
      <h1>Hello Judge ${name},</h1>
      <p>We are pleased to inform you that you have been assigned to a new competition on the <strong>E-Music Platform</strong>.</p>

      <div class="highlight">
        <p><strong>Competition:</strong> ${competitionName}</p>
        <p><strong>Date:</strong> ${competitionDate}</p>
        <p><strong>Venue:</strong> ${venue}</p>
        <span class="tag">New Assignment</span>
      </div>

      <p>Your expertise is highly valued, and we are confident that you will bring fairness and professionalism to this event.</p>
      <p>Kindly mark your calendar and make the necessary preparations ahead of the scheduled date.</p>

      <p>Thank you for your continued commitment to excellence.</p>
      <p>Best regards,<br/>The E-Music Team</p>

      <div class="footer">
        &copy; ${new Date().getFullYear()} E-Music. All rights reserved.
      </div>
    </div>
  </body>
  </html>
`;
