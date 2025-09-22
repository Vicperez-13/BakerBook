# EmailJS Setup Guide for "Share Your Sweet Story" Form

This guide will help you set up EmailJS to send emails from the contact form to Ava's email address.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your email provider
5. **Important**: Use Ava's email address as the service email
6. Copy the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template

1. Click "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Sweet Story from {{user_name}}

From: {{user_name}} ({{user_email}})
Inquiry Type: {{inquiry_type}}

Message:
{{message}}

---
Sent from Ava's Tweats website contact form
```

4. Save the template and copy the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Public Key

1. Go to "Account" → "General" in your EmailJS dashboard
2. Copy your **Public Key** (e.g., "user_abcdef123456")

## Step 5: Configure Environment Variables

1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your values:

```
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abcdef123456
```

## Step 6: Template Variables

Make sure your EmailJS template uses these variable names:
- `{{user_name}}` - Customer's name
- `{{user_email}}` - Customer's email
- `{{inquiry_type}}` - Type of inquiry selected
- `{{message}}` - Customer's message

## Step 7: Test the Form

1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Check Ava's email inbox for the message
4. If it works locally, deploy to Vercel

## Step 8: Vercel Environment Variables

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add the same three variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

## Troubleshooting

- **Error "Email service not configured"**: Check your `.env` file exists and has the correct variable names
- **Form submits but no email**: Check your EmailJS template variable names match exactly
- **"Failed to send"**: Check your service configuration and make sure the email service is active
- **Emails going to spam**: Add your domain to EmailJS allowed origins in security settings

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic templates
- Standard support

This should be sufficient for most small business contact forms.

## Security Note

The EmailJS public key is safe to include in frontend code - it's designed to be public. The actual email sending is secured by EmailJS's servers.