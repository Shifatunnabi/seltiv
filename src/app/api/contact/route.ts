import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const esc = (v: unknown) =>
  String(v ?? '')
    .slice(0, 5000)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const row = (label: string, value: string) =>
  value
    ? `<tr><td style="padding:10px 0;border-bottom:1px solid #1e2a23;"><div style="font-family:monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#8a938d;">${label}</div><div style="font-size:16px;color:#ffffff;margin-top:4px;white-space:pre-wrap;">${value}</div></td></tr>`
    : '';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = esc(body.name);
    const email = esc(body.email);
    const description = esc(body.description);
    if (!name || !email || !description || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email))) {
      return NextResponse.json({ message: 'Missing or invalid fields' }, { status: 400 });
    }
    const phone = esc(body.phone);
    const company = esc(body.company);
    const budget = esc(body.budget);
    const services = Array.isArray(body.services) ? body.services.map(esc).join(', ') : esc(body.services);

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

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      replyTo: String(body.email),
      subject: `New project enquiry: ${String(body.name).slice(0, 80)}${services ? ` (${String(services).slice(0, 80)})` : ''}`,
      text: [
        `Name: ${body.name}`,
        `Email: ${body.email}`,
        `Company: ${body.company ?? ''}`,
        `Phone: ${body.phone ?? ''}`,
        `Services: ${Array.isArray(body.services) ? body.services.join(', ') : ''}`,
        `Budget: ${body.budget ?? ''}`,
        '',
        String(body.description ?? ''),
      ].join('\n'),
      html: `
        <div style="font-family:Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;border-radius:20px;background:#050807;color:#fff;">
          <div style="font-family:monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#00e676;">New enquiry · seltiv.com</div>
          <h1 style="font-weight:400;font-size:28px;letter-spacing:-.02em;margin:12px 0 24px;">${name}</h1>
          <table style="width:100%;border-collapse:collapse;">
            ${row('Email', email)}
            ${row('Company', company)}
            ${row('Phone / WhatsApp', phone)}
            ${row('Services', services)}
            ${row('Budget', budget)}
            ${row('Project', description)}
          </table>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
