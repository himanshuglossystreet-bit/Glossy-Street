"use server";

import { Resend } from "resend";

let resendClient: Resend | null = null;

function getResend() {
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }

  return resendClient;
}

export interface FormState {
  success: boolean;
  message: string;
}

function getValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value: string, accent = false) {
  return `
    <tr>
      <td style="padding:10px 0;font-size:11px;font-weight:700;color:#7A7A7A;width:34%;text-transform:uppercase;letter-spacing:0.12em;">${label}</td>
      <td style="padding:10px 0;font-size:14px;font-weight:${accent ? "800" : "600"};color:${accent ? "#C8121A" : "#F3F3F3"};">${value || "Not Specified"}</td>
    </tr>
  `;
}

export async function sendContactEmail(_: unknown, formData: FormData): Promise<FormState> {
  const name = getValue(formData, "name");
  const email = getValue(formData, "email");
  const companyValue = getValue(formData, "company");
  const vehicle = getValue(formData, "vehicle");
  const company = companyValue || vehicle || "Not Specified";
  const phone = getValue(formData, "phone") || "Not Specified";
  const service = getValue(formData, "service") || "Not Specified";
  const date = getValue(formData, "date") || "Not Specified";
  const message = getValue(formData, "message");

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Required fields missing. Please complete name, email, and message lines.",
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      success: false,
      message: "Transmission broke. Please try again or drop a line straight to theorign911@gmail.com",
    };
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company);
  const safePhone = escapeHtml(phone);
  const safeService = escapeHtml(service);
  const safeDate = escapeHtml(date);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Glossy Street Lead</title>
      </head>
      <body style="margin:0;padding:0;background:#060606;color:#F3F3F3;font-family:'DM Sans',Arial,sans-serif;">
        <div style="padding:28px 16px;background:#060606;">
          <div style="max-width:640px;margin:0 auto;background:#0C0C0C;border:1px solid rgba(180,184,188,0.18);border-radius:2px;overflow:hidden;">
            <div style="padding:28px 30px 22px;border-bottom:1px solid rgba(180,184,188,0.12);background:linear-gradient(135deg,#0C0C0C 0%,#111111 70%,rgba(200,18,26,0.16) 100%);">
              <div style="display:inline-block;background:#C8121A;color:#FFFFFF;padding:7px 12px;font-size:10px;font-family:'DM Mono',Consolas,monospace;font-weight:700;text-transform:uppercase;letter-spacing:0.18em;margin-bottom:18px;">
                Incoming Booking Brief
              </div>
              <h1 style="margin:0;color:#F3F3F3;font-family:'Barlow Condensed',Arial Narrow,sans-serif;font-size:34px;line-height:0.95;font-weight:900;text-transform:uppercase;letter-spacing:0;">
                New Lead<br><span style="color:#C8121A;">Gloss Signal</span>
              </h1>
              <p style="margin:14px 0 0;color:#7A7A7A;font-size:12px;font-family:'DM Mono',Consolas,monospace;text-transform:uppercase;letter-spacing:0.08em;">
                ${escapeHtml(timestamp)} IST
              </p>
            </div>

            <div style="padding:26px 30px 30px;">
              <table style="width:100%;border-collapse:collapse;margin:0 0 24px;">
                ${row("Name", safeName)}
                ${row("Email", `<a href="mailto:${safeEmail}" style="color:#C8121A;text-decoration:none;">${safeEmail}</a>`, true)}
                ${row("Company / Vehicle", safeCompany)}
                ${row("Phone", safePhone, true)}
                ${row("Service", safeService)}
                ${row("Preferred Date", safeDate)}
              </table>

              <div style="height:1px;background:rgba(180,184,188,0.12);margin:0 0 24px;"></div>

              <div>
                <h2 style="margin:0 0 10px;color:#7A7A7A;font-size:11px;font-family:'DM Mono',Consolas,monospace;font-weight:700;text-transform:uppercase;letter-spacing:0.16em;">
                  Notes / Message
                </h2>
                <div style="background:#060606;border:1px solid rgba(180,184,188,0.16);border-left:3px solid #C8121A;padding:18px;color:#F3F3F3;font-size:14px;line-height:1.65;">
                  ${safeMessage}
                </div>
              </div>

              <div style="margin-top:26px;padding-top:18px;border-top:1px solid rgba(180,184,188,0.12);text-align:center;color:#7A7A7A;font-size:10px;font-family:'DM Mono',Consolas,monospace;text-transform:uppercase;letter-spacing:0.14em;">
                Glossy Street Car Detailing Studio // Resend Lead Channel
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    await getResend().emails.send({
      from: "onboarding@resend.dev",
      to: ["himanshudahiya1780@gmail.com"],
      subject: `New Glossy Street lead // ${company} - ${service}`,
      replyTo: email,
      html,
    });

    return {
      success: true,
      message: "Brief transmitted seamlessly. Expect our connection loop within 8-12 hours.",
    };
  } catch (error) {
    console.error("Resend API Error:", error);
    return {
      success: false,
      message: "Transmission broke. Please try again or drop a line straight to himanshudahiya1780@gmail.com",
    };
  }
}
