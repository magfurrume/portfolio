
export const autoReplyTemplate = (name: string, greeting: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; }
      .content { padding: 20px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#0f0f0f;font-family:'Segoe UI',Arial,sans-serif;color:#e5e5e5;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding:30px 15px;">
        <table class="container" width="600" cellpadding="0" cellspacing="0" style="background:#1a1a1a;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.4);">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(90deg,#10B981,#3B82F6);padding:30px;text-align:center;">
              <h1 style="margin:0;font-size:18px;color:#fff;font-weight:600;">Thank You for Reaching Out!</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td class="content" style="padding:40px 30px;line-height:1.6;">
              <p style="font-size:16px;margin:0 0 15px;">${greeting}, <strong style="color:#10B981;">${name}</strong>,</p>
              <p style="font-size:16px;margin:0 0 15px;">
                I truly appreciate you taking the time to get in touch with me through my website. 
                Your message has been successfully received, and I will personally review it shortly.
              </p>
              <p style="font-size:16px;margin:0 0 15px;">
                I strive to respond as quickly as possible — usually within <strong>24–48 hours</strong>. 
                In the meantime, feel free to explore more about my work and projects:
              </p>

              <!-- Call to Action -->
              <div style="text-align:center;margin:30px 0;">
                <a href="https://magfur.site" 
                   style="background:linear-gradient(90deg,#10B981,#3B82F6);padding:12px 24px;border-radius:30px;color:#fff;text-decoration:none;font-size:15px;font-weight:500;display:inline-block;">
                  Visit My Portfolio
                </a>
              </div>

              <p style="font-size:14px;color:#aaa;margin:30px 0 0;text-align:center;">
                — This is an automated message. Please do not reply directly. —
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#111;padding:20px;text-align:center;font-size:13px;color:#777;">
              © ${new Date().getFullYear()} Md. Magfur Alam
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
