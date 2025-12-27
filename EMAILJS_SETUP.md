# EmailJS Setup Guide for OTP Emails

## Steps to Configure EmailJS

1. **Create an EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account (allows 200 emails/month)

2. **Add an Email Service**
   - Go to "Email Services" in the dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions to connect your email

3. **Create an Email Template**
   - Go to "Email Templates" in the dashboard
   - Click "Create New Template"
   - Use this template content:
   
   ```
   Subject: Your OTP Code for Explore.KE
   
   Hello,
   
   Your OTP code is: {{otp}}
   
   This code will expire in 10 minutes.
   
   If you didn't request this code, please ignore this email.
   
   Best regards,
   Explore.KE Team
   ```
   
   - Make sure to use `{{otp}}` and `{{email}}` as variables
   - Save the template and note the Template ID

4. **Get Your Credentials**
   - Go to "Account" → "General"
   - Find your "Public Key"
   - Note your Service ID from the Email Services page
   - Note your Template ID from the Email Templates page

5. **Update Login.js**
   - Open `src/Components/Login.js`
   - Find the `EMAILJS_CONFIG` object (around line 20)
   - Replace the placeholder values:
     ```javascript
     const EMAILJS_CONFIG = {
       PUBLIC_KEY: "your_public_key_here",
       SERVICE_ID: "your_service_id_here",
       TEMPLATE_ID: "your_template_id_here",
     };
     ```

6. **Test the Setup**
   - Run your app: `npm run dev`
   - Try logging in with a real email address
   - Check your email inbox for the OTP

## Alternative: Backend Solution

For production, consider using a backend API to send emails:
- More secure (API keys stay on server)
- Better rate limiting
- More reliable delivery
- Can use services like SendGrid, Mailgun, AWS SES, etc.

