import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, budget, description } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: 'hello@seltiv.com',
      subject: `New Project Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Budget: ${budget}
        Description: ${description}
      `,
      html: `
        <div style="font-family: 'Syne', sans-serif, Arial; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid rgba(0,230,118,0.3); border-radius: 16px; background-color: #05090f; color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #00e676; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">New Inquiry</h1>
            <p style="color: #a0aec0; margin: 5px 0 0; font-size: 14px;">Received from Seltiv Contact Form</p>
          </div>
          
          <div style="background: rgba(255,255,255,0.03); padding: 25px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="margin-bottom: 20px;">
              <label style="display: block; color: #00e676; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 5px;">Client Name</label>
              <div style="font-size: 16px; color: #fff;">${name}</div>
            </div>
            
            <div style="margin-bottom: 20px;">
              <label style="display: block; color: #00e676; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 5px;">Email Address</label>
              <div style="font-size: 16px; color: #fff;">${email}</div>
            </div>
            
            <div style="margin-bottom: 20px;">
              <label style="display: block; color: #00e676; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 5px;">Phone / WhatsApp</label>
              <div style="font-size: 16px; color: #fff;">${phone}</div>
            </div>
            
            <div style="margin-bottom: 20px;">
              <label style="display: block; color: #00e676; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 5px;">Project Budget</label>
              <div style="font-size: 16px; color: #fff;">${budget}</div>
            </div>
            
            <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
              <label style="display: block; color: #00e676; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 10px;">Project Description</label>
              <div style="font-size: 15px; color: #cbd5e0; line-height: 1.6; white-space: pre-wrap;">${description}</div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #718096;">
            © 2026 Seltiv. All rights reserved.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
