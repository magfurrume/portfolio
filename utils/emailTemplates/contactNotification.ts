export const contactNotificationTemplate = (
  name: string,
  email: string,
  subject: string,
  message: string
) => `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#111;font-family:Arial,sans-serif;color:#E0E0E0;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:20px;">
        <table width="600" style="background:#1a1a1a;border-radius:8px;overflow:hidden;">
          <tr>
            <td style="background:linear-gradient(90deg,#10B981,#3B82F6);padding:20px;text-align:center;">
              <h1 style="margin:0;color:#fff;">New Contact Message</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong><br/>${message}</p>
            </td>
          </tr>
          <tr>
            <td style="background:#111;padding:10px;text-align:center;color:#666;font-size:13px;">
              © ${new Date().getFullYear()} magfur.site
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
