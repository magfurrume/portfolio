import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactNotificationTemplate } from "@/utils/emailTemplates/contactNotification";
import { autoReplyTemplate } from "@/utils/emailTemplates/autoReply";
import { getGreeting } from "@/utils/emailTemplates/generateGreetings"


export async function POST(req: Request) {
  try {
   
    const { name, email, subject, message, timeZone } = await req.json();
 const greeting = getGreeting(timeZone || "UTC")
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXTAPP_EMAIL_USER,
        pass: process.env.NEXTAPP_EMAIL_PASS,
      },
    });

    // 1. Send email to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.NEXTAPP_EMAIL_USER}>`,
      to: process.env.NEXTAPP_EMAIL_USER,
      subject: `New message from ${name} (${subject})`,
      html: contactNotificationTemplate(name, email, subject, message),
    });

    // 2. Auto-reply to sender
    await transporter.sendMail({
      from: `"No Reply - Magfur" <${process.env.NEXTAPP_EMAIL_USER}>`,
      to: email,
      subject: "I received your message ✔",
      html: autoReplyTemplate(name, greeting),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
