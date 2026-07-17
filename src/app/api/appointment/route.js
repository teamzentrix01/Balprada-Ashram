import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_LENGTHS = {
  name: 100,
  phone: 18,
  email: 150,
  date: 10,
  time: 40,
  branch: 50,
  concern: 80,
  message: 1000,
};

function clean(value, maximum) {
  return String(value || "").trim().slice(0, maximum);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (body.company) return NextResponse.json({ ok: true });

    const appointment = Object.fromEntries(
      Object.entries(MAX_LENGTHS).map(([field, maximum]) => [field, clean(body[field], maximum)]),
    );

    if (!appointment.name || !appointment.phone || !appointment.date || !appointment.time || !appointment.branch || !appointment.concern) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    if (!/^[+\d][\d\s()-]{7,17}$/.test(appointment.phone)) {
      return NextResponse.json({ error: "Please enter a valid mobile number." }, { status: 400 });
    }

    if (appointment.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(appointment.email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const from = process.env.SMTP_FROM || smtpUser;
    const to = process.env.APPOINTMENT_EMAIL_TO || "rdevang71@gmail.com";

    if (!smtpHost || !smtpUser || !smtpPassword || !from || !Number.isInteger(smtpPort)) {
      console.error("Appointment SMTP environment variables are not configured.");
      return NextResponse.json({ error: "Email service is not configured yet. Please call us to book." }, { status: 503 });
    }

    const safe = Object.fromEntries(Object.entries(appointment).map(([key, value]) => [key, escapeHtml(value)]));
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: process.env.SMTP_SECURE === "true" || smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });

    await transporter.sendMail({
      from,
      to,
      ...(appointment.email ? { replyTo: appointment.email } : {}),
      subject: `New appointment request — ${appointment.name}`,
      html: `
          <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#24312b">
            <div style="background:#123f36;color:#fff;padding:24px 28px">
              <p style="margin:0 0 6px;color:#d8b56a;font-size:12px;letter-spacing:2px;text-transform:uppercase">Balprada Website</p>
              <h1 style="margin:0;font-size:26px">New appointment request</h1>
            </div>
            <table style="width:100%;border-collapse:collapse;background:#fbfaf5">
              <tbody>
                ${[
                  ["Name", safe.name],
                  ["Mobile", safe.phone],
                  ["Email", safe.email || "Not provided"],
                  ["Preferred date", safe.date],
                  ["Preferred time", safe.time],
                  ["Branch", safe.branch],
                  ["Concern", safe.concern],
                  ["Reason for visit", safe.message || "Not provided"],
                ].map(([label, value]) => `<tr><td style="padding:13px 18px;border-bottom:1px solid #e4e0d5;font-weight:bold;width:34%">${label}</td><td style="padding:13px 18px;border-bottom:1px solid #e4e0d5">${value}</td></tr>`).join("")}
              </tbody>
            </table>
          </div>
        `,
      text: `New Balprada appointment request\n\nName: ${appointment.name}\nMobile: ${appointment.phone}\nEmail: ${appointment.email || "Not provided"}\nPreferred date: ${appointment.date}\nPreferred time: ${appointment.time}\nBranch: ${appointment.branch}\nConcern: ${appointment.concern}\nReason for visit: ${appointment.message || "Not provided"}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Appointment request failed:", error);
    return NextResponse.json({ error: "We could not send your request. Please try again." }, { status: 500 });
  }
}
