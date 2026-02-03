# Quick SMTP Setup Reference

## 🚀 Quick Setup (3 Steps)

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Edit `.env.local` with your credentials:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   SMTP_FROM=your-email@gmail.com
   SMTP_TO=your-email@gmail.com
   ```

3. **Restart dev server:**
   ```bash
   npm run dev
   ```

## 📧 Popular Providers

### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```
*Requires: 2FA + App Password*

### Outlook
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

### SendGrid (Recommended for Production)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
```

## 🔧 Port Reference

| Port | Best For |
|------|----------|
| **587** | ✅ Recommended (TLS) |
| 465 | SSL encryption |
| 25 | Often blocked |

## ⚡ Change Port

Simply update the `SMTP_PORT` value in `.env.local`:

```env
SMTP_PORT=587   # or 465, or 25
```

## ✅ Files Created

- `/app/api/send-email/route.js` - Email API endpoint
- `.env.local` - Your SMTP configuration (git-ignored)
- `.env.example` - Template for SMTP settings
- `SMTP_SETUP.md` - Detailed setup guide
- `README.md` - Updated with SMTP documentation

## 🧪 Test It

1. Go to: `http://localhost:3000/contact`
2. Fill the form
3. Click "Send Message"
4. Check your inbox!

## 🆘 Quick Troubleshooting

**Not working?**
- ✓ Did you restart the dev server?
- ✓ Using app password (not regular password)?
- ✓ Check terminal for error messages
- ✓ Verify .env.local is in root directory
- ✓ Try port 465 instead of 587

**Still stuck?** 
→ See `SMTP_SETUP.md` for detailed troubleshooting

---

💡 **Tip:** You mentioned you'll configure the port yourself later. Just edit `SMTP_PORT` in `.env.local` anytime!
