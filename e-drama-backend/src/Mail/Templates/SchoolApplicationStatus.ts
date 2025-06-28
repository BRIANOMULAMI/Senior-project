export const schoolApplicationStatusEmailHTML = (
  schoolName: string,
  status: "APPROVED" | "DENIED",
  competitionName: string,
  competitionDate: string,
  venue: string,
  rejectionReason?: string
): string => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Competition Application Status</title>
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
      border-top: 6px solid ${status === "APPROVED" ? "#38a169" : "#e53e3e"};
    }
    h1 {
      color: ${status === "APPROVED" ? "#2c5282" : "#2d3748"};
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
    .status-badge {
      display: inline-block;
      padding: 6px 12px;
      border-radius: 20px;
      font-weight: bold;
      background-color: ${status === "APPROVED" ? "#c6f6d5" : "#fed7d7"};
      color: ${status === "APPROVED" ? "#276749" : "#9b2c2c"};
    }
    .footer {
      margin-top: 40px;
      font-size: 0.85rem;
      color: #718096;
      text-align: center;
    }
    .rejection-notice {
      background-color: #fff5f5;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #e53e3e;
      margin: 25px 0;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <h1>Dear ${schoolName},</h1>
    
    ${
      status === "APPROVED"
        ? `
          <p>We are pleased to inform you that your application for the <strong>${competitionName}</strong> has been <span class="status-badge">Approved</span>!</p>
          <p>We look forward to your participation in this exciting event.</p>`
        : `
          <p>After careful consideration, we regret to inform you that your application for the <strong>${competitionName}</strong> has been <span class="status-badge">Not Approved</span>.</p>`
    }

    <div class="highlight">
      <p><strong>Competition:</strong> ${competitionName}</p>
      <p><strong>Date:</strong> ${competitionDate}</p>
      <p><strong>Venue:</strong> ${venue}</p>
    </div>

    ${
      status === "DENIED"
        ? `
          <div class="rejection-notice">
            <p><strong>Reason for rejection:</strong></p>
            <p>${rejectionReason || "Does not meet current participation criteria"}</p>
            <p>For further clarification or questions, please contact our administration team at 
            <a href="mailto:competitions@example.com">competitions@example.com</a>.</p>
          </div>`
        : `
          <p>Please ensure all participants arrive at least 45 minutes before the scheduled start time. 
          Competition guidelines and requirements will be sent separately.</p>`
    }

    <p>${
      status === "APPROVED"
        ? "Get ready to showcase your talents!"
        : "We encourage you to apply for future events."
    }</p>

    <p>Best regards,<br/>Competition Coordination Team</p>

    <div class="footer">
      &copy; ${new Date().getFullYear()} Competition Coordination Team. All rights reserved.
    </div>
  </div>
</body>
</html>
`;
