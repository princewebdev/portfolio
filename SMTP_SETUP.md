# SMTP Email Configuration Guide

This document provides detailed instructions on how to configure the contact form email functionality for your portfolio website.

## Quick Start

1. Copy `.env.example` to `.env.local`
2. Fill in your SMTP credentials
3. Restart the development server
4. Test the contact form

## Detailed Setup Instructions

### Step 1: Create Environment File

Create a file named `.env.local` in the root directory of your project (or copy from `.env.example`):

```bash
cp .env.example .env.local
```

### Step 2: Configure SMTP Settings

Edit `.env.local` and add your SMTP credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@gmail.com
SMTP_TO=your-email@gmail.com
```

### Step 3: Email Provider Setup

#### Gmail (Recommended for Testing)

1. **Enable 2-Factor Authentication**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable "2-Step Verification"

2. **Generate App Password**
   - In Google Account, go to Security
   - Click on "2-Step Verification"
   - Scroll down to "App passwords"
   - Select "Mail" and your device
   - Copy the 16-character password
   - Use this as `SMTP_PASSWORD`

3. **Configuration**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=youremail@gmail.com
   SMTP_PASSWORD=xxxx xxxx xxxx xxxx
   ```

#### Outlook/Hotmail

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=youremail@outlook.com
SMTP_PASSWORD=your-password
```

#### Yahoo Mail

```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=youremail@yahoo.com
SMTP_PASSWORD=your-app-password
```

Note: Yahoo also requires an app password. Generate one at: Account Info → Account Security → Generate app password

#### SendGrid (Production Recommended)

1. Sign up at [SendGrid](https://sendgrid.com/)
2. Create an API key
3. Configure:
   ```env
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASSWORD=your-sendgrid-api-key
   ```

#### Mailgun

1. Sign up at [Mailgun](https://www.mailgun.com/)
2. Get SMTP credentials from your domain settings
3. Configure:
   ```env
   SMTP_HOST=smtp.mailgun.org
   SMTP_PORT=587
   SMTP_USER=postmaster@your-domain.mailgun.org
   SMTP_PASSWORD=your-mailgun-password
   ```

#### Custom SMTP Server

```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=contact@yourdomain.com
SMTP_PASSWORD=your-password
```

### Step 4: Understanding Port Numbers

Different ports serve different purposes:

| Port | Protocol | Security | Use Case |
|------|----------|----------|----------|
| 25   | SMTP     | None/STARTTLS | Often blocked by ISPs |
| 465  | SMTPS    | SSL/TLS | Secure, implicit encryption |
| 587  | SMTP     | STARTTLS | **Recommended**, explicit TLS |
| 2525 | SMTP     | STARTTLS | Alternative to 587 |

**Recommendation:** Use port **587** with STARTTLS for best compatibility.

### Step 5: Configure Email Addresses

- **SMTP_FROM**: The email address that appears in the "From" field
- **SMTP_TO**: The email address where you want to receive contact form submissions

```env
SMTP_FROM=noreply@yourdomain.com
SMTP_TO=hello@yourdomain.com
```

### Step 6: Restart Development Server

After creating/editing `.env.local`, restart your development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 7: Test the Contact Form

1. Navigate to the Contact page: `http://localhost:3000/contact`
2. Fill in the form with test data
3. Click "Send Message"
4. Check your inbox (SMTP_TO address)

## Troubleshooting

### Error: "Invalid login"

**Solution:**
- Verify username and password are correct
- Use app-specific password (Gmail, Yahoo)
- Check if the email provider requires additional authentication

### Error: "Connection timeout"

**Solution:**
- Check if the port is correct
- Verify SMTP_HOST is reachable
- Check firewall settings
- Try port 465 or 2525 if 587 doesn't work

### Error: "Self-signed certificate"

This can happen with some SMTP servers. To fix (development only):

Update `app/api/send-email/route.js`:
```javascript
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false  // Add this line
  }
});
```

⚠️ **Warning:** Only use `rejectUnauthorized: false` in development. Never in production!

### Email Not Received

1. Check spam/junk folder
2. Verify SMTP_TO address is correct
3. Check server logs for errors
4. Test with a different email provider
5. Verify email provider allows SMTP

### Gmail-Specific Issues

**"Less secure app access"**
- This setting is deprecated
- You MUST use 2FA + App Password
- Regular password won't work

**"Daily sending limit"**
- Free Gmail accounts have sending limits
- Consider using SendGrid or Mailgun for production

## Production Deployment

### Vercel

1. Go to Project Settings → Environment Variables
2. Add all SMTP_* variables
3. Redeploy your application

### Netlify

1. Go to Site Settings → Environment Variables
2. Add all SMTP_* variables
3. Trigger a new deploy

### Other Platforms

Add environment variables through your platform's dashboard or CLI.

## Security Best Practices

1. ✅ **Never commit** `.env.local` to version control
2. ✅ Use app-specific passwords, not your main password
3. ✅ Use strong, unique passwords for SMTP
4. ✅ Consider using dedicated email services (SendGrid, Mailgun) for production
5. ✅ Implement rate limiting on the API endpoint (future improvement)
6. ✅ Add CAPTCHA for spam prevention (future improvement)

## Additional Configuration

### Rate Limiting (Recommended)

To prevent spam, consider adding rate limiting:

```bash
npm install next-rate-limit
```

Then update the API route to include rate limiting.

### CAPTCHA Integration (Recommended)

To prevent automated spam:

1. Add Google reCAPTCHA or hCaptcha
2. Verify CAPTCHA token in the API route
3. Only send email if CAPTCHA is valid

### Email Templates

The email template is defined in `app/api/send-email/route.js`. You can customize:
- HTML layout
- Colors and styling
- Additional information included
- Email subject line

## Support

If you encounter issues:
1. Check the terminal for error messages
2. Review this guide thoroughly
3. Test with Gmail first (most reliable for testing)
4. Check your email provider's SMTP documentation

## Example Working Configuration

Here's a complete working example with Gmail:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=john.doe@gmail.com
SMTP_PASSWORD=abcd efgh ijkl mnop
SMTP_FROM=john.doe@gmail.com
SMTP_TO=john.doe@gmail.com
```

After saving this, restart your dev server and test!

---

**Last Updated:** January 2025
