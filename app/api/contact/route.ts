import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  organisation?: string;
  email: string;
  phone?: string;
  division?: string;
  message: string;
}

const MAX_LENGTHS = {
  name: 120,
  organisation: 160,
  email: 200,
  phone: 30,
  division: 80,
  message: 4000,
} as const;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Strips control characters and trims; keeps the API resilient to junk input
 *  without rejecting legitimate names/messages in any language or script. */
function sanitize(value: string, maxLength: number): string {
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  let data: ContactPayload;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof data.name !== "string" || typeof data.email !== "string" || typeof data.message !== "string") {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const name = sanitize(data.name, MAX_LENGTHS.name);
  const email = sanitize(data.email, MAX_LENGTHS.email);
  const message = sanitize(data.message, MAX_LENGTHS.message);
  const organisation = data.organisation ? sanitize(data.organisation, MAX_LENGTHS.organisation) : undefined;
  const phone = data.phone ? sanitize(data.phone, MAX_LENGTHS.phone) : undefined;
  const division = data.division ? sanitize(data.division, MAX_LENGTHS.division) : "General Enquiry";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const enquiry = {
    name,
    organisation,
    email,
    phone,
    division,
    message,
    receivedAt: new Date().toISOString(),
  };

  try {
    await deliverEnquiry(enquiry);
  } catch (err) {
    console.error("Failed to deliver contact enquiry:", err);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

/**
 * Delivery integration point. Currently logs server-side only.
 *
 * To go live, replace the body of this function with a real provider call,
 * for example using Resend (https://resend.com):
 *
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "Vetrivel Groups Website <noreply@vetrivelgroups.in>",
 *     to: process.env.CONTACT_FORM_TO_EMAIL ?? "sukumar@vetrivelgroups.in",
 *     subject: `New enquiry: ${enquiry.division}`,
 *     replyTo: enquiry.email,
 *     text: [
 *       `Name: ${enquiry.name}`,
 *       `Organisation: ${enquiry.organisation ?? "—"}`,
 *       `Email: ${enquiry.email}`,
 *       `Phone: ${enquiry.phone ?? "—"}`,
 *       `Division: ${enquiry.division}`,
 *       "",
 *       enquiry.message,
 *     ].join("\n"),
 *   });
 *
 * See .env.example for the environment variables this expects.
 */
async function deliverEnquiry(enquiry: {
  name: string;
  organisation?: string;
  email: string;
  phone?: string;
  division: string;
  message: string;
  receivedAt: string;
}): Promise<void> {
  console.log("New contact enquiry received:", enquiry);
}
