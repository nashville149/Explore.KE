# Gmail Setup Guide for OTP Emails via EmailJS

## Steps to Configure Gmail with EmailJS

1. **Create an EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account (allows 200 emails/month)

2. **Set Up Gmail Service**
   - Go to "Email Services" in the EmailJS dashboard
   - Click "Add New Service"
   - Select "Gmail" as your email service
   - You'll need to connect your Gmail account:
     - Click "Connect Account"
     - Sign in with your Gmail account (e.g., yourname@gmail.com)
     - Grant EmailJS permission to send emails on your behalf
   - After connecting, note your Service ID (e.g., "service_xxxxx")

3. **Create an Email Template for Gmail**
   - Go to "Email Templates" in the EmailJS dashboard
   - Click "Create New Template"
   - Set the template name (e.g., "OTP Template")
   - Use this template content:
   
   ```
   To: {{to_email}}
   From: yourname@gmail.com
   Subject: Your OTP Code for Explore.KE
   
   Hello,
   
   Your OTP code is: {{otp}}
   
   This code will expire in 10 minutes.
   
   If you didn't request this code, please ignore this email.
   
   Best regards,
   Explore.KE Team
   ```
   
   - Important: Use `{{otp}}` for the OTP code
   - Use `{{to_email}}` or `{{email}}` for the recipient email
   - Save the template and note the Template ID (e.g., "template_xxxxx")

4. **Get Your Gmail Credentials**
   - Go to "Account" → "General" in EmailJS dashboard
   - Find your "Public Key" (also called "Public API Key")
   - Note your Gmail Service ID from the Email Services page (starts with "service_")
   - Note your Template ID from the Email Templates page (starts with "template_")

5. **Update Login.js with Gmail Configuration**
   - Open `src/Components/Login.js`
   - Find the `EMAILJS_CONFIG` object (around line 23-27)
   - Replace the placeholder values with your Gmail credentials:
     ```javascript
     const EMAILJS_CONFIG = {
       PUBLIC_KEY: "your_emailjs_public_key",      // From EmailJS Account → General
       SERVICE_ID: "service_xxxxx",                 // Your Gmail service ID
       TEMPLATE_ID: "template_xxxxx",                // Your template ID
     };
     ```
   - Example:
     ```javascript
     const EMAILJS_CONFIG = {
       PUBLIC_KEY: "abcdefghijklmnop",
       SERVICE_ID: "service_gmail123",
       TEMPLATE_ID: "template_otp456",
     };
     ```

6. **Test Gmail Email Sending**
   - Run your app: `npm run dev`
   - Try logging in with any email address
   - The OTP will be sent from your Gmail account (yourname@gmail.com)
   - Check the recipient's email inbox for the OTP
   - Also check spam folder if not received

## Gmail-Specific Notes

- **Gmail Account**: The emails will be sent FROM your connected Gmail account
- **Rate Limits**: Gmail has daily sending limits (500 emails/day for free accounts)
- **Security**: Make sure to keep your Public Key secure (it's safe to use in frontend code)
- **Testing**: You can test by sending OTPs to your own email first

## Troubleshooting Gmail Issues

- **400 Error**: Check that your Service ID, Template ID, and Public Key are correct
- **Emails not received**: Check spam folder, verify Gmail account is properly connected
- **Permission denied**: Reconnect your Gmail account in EmailJS dashboard
- **Template variables**: Make sure your template uses `{{otp}}` exactly as shown

## Alternative: Direct Gmail SMTP (Backend Required)

For production, consider using a backend API with Gmail SMTP:
- More secure (credentials stay on server)
- Better rate limiting
- More reliable delivery
- Requires Node.js backend with Nodemailer or similar

