import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, address, propertyType, message } = data;

    // Create a transporter using an ethereal account (or replace with real credentials)
    // NOTE: In production, you'd use environment variables for user/pass
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password',
      },
    });

    const mailOptions = {
      from: '"The Pacific Contact Form" <your-email@gmail.com>',
      to: 'parthivkm73@gmail.com',
      subject: `New The Pacific Request from ${name}`,
      text: `
        New Request from The Pacific Website:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        Property Type: ${propertyType}
        Message: ${message}
      `,
    };

    // For demonstration, we'll log it if credentials aren't set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('--- FORM SUBMISSION RECEIVED (Credentials not set) ---');
      console.log(mailOptions.text);
      return NextResponse.json({ success: true, message: 'Message logged (No real email sent)' });
    }

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
