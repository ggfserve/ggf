import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_UQCTdz7H_EDQR1jcKcEGYgFrQARkjiUHD');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, companyName, email, phone, message } = body;

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'quynh2k1vkhung@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
