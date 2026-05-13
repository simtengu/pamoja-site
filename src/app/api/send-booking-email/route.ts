import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { BookingData } from "@/types/booking";

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Helpers ────────────────────────────────────────────────────────────────
function fmt(ymd: string) {
  if (!ymd) return "—";
  return new Date(ymd + "T00:00:00Z").toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function buildEmailHtml(data: BookingData, bookingId: string): string {
  const nights = data.selectedDates.length;
  const total = data.selectedRooms.reduce((s, r) => s + r.price * nights, 0);
  const experiencesList =
    data.selectedExperiences.length > 0
      ? data.selectedExperiences.map((e) => e.replace(/-/g, " ")).join(", ")
      : null;

  const roomRows = data.selectedRooms
    .map(
      (r) => `
      <tr>
        <td style="padding:10px 16px; border-bottom:1px solid #f0ebe3; font-size:13px; color:#1c1917;">Room ${r.roomNumber} &mdash; ${r.standard}</td>
        <td style="padding:10px 16px; border-bottom:1px solid #f0ebe3; font-size:13px; color:#1c1917; text-align:right;">$${r.price.toLocaleString()} × ${nights} night${nights > 1 ? "s" : ""}</td>
        <td style="padding:10px 16px; border-bottom:1px solid #f0ebe3; font-size:13px; font-weight:700; color:#1c1917; text-align:right;">$${(r.price * nights).toLocaleString()}</td>
      </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Booking Request — Pamoja Africa</title>
</head>
<body style="margin:0; padding:0; background-color:#faf8f5; font-family:'Georgia', serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#faf8f5; padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" style="max-width:600px; background:#ffffff; border-radius:4px; overflow:hidden; box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg, #1c1917 0%, #292524 60%, #78350f 100%); padding:48px 40px; text-align:center;">
              <p style="margin:0 0 8px; font-size:11px; letter-spacing:0.3em; text-transform:uppercase; color:#d97706; font-family:Arial,sans-serif; font-weight:700;">Pamoja Africa</p>
              <h1 style="margin:0 0 12px; font-size:28px; color:#ffffff; font-weight:400; line-height:1.3;">New Booking Request</h1>
              <p style="margin:0; font-size:13px; color:rgba(255,255,255,0.6); font-family:Arial,sans-serif;">A new reservation enquiry has been submitted via the website.</p>
              <div style="margin:24px auto 0; display:inline-block; background:rgba(217,119,6,0.15); border:1px solid rgba(217,119,6,0.4); border-radius:4px; padding:8px 20px;">
                <p style="margin:0; font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:#d97706; font-family:Arial,sans-serif; font-weight:700;">Booking Reference</p>
                <p style="margin:4px 0 0; font-size:16px; font-family:'Courier New', monospace; color:#ffffff; font-weight:700; letter-spacing:0.05em;">${bookingId}</p>
              </div>
            </td>
          </tr>

          <!-- Property Banner -->
          <tr>
            <td style="background:#78350f; padding:14px 40px; text-align:center;">
              <p style="margin:0; font-size:13px; color:#fde68a; font-family:Arial,sans-serif; font-weight:700; letter-spacing:0.1em; text-transform:uppercase;">${data.propertyName}</p>
            </td>
          </tr>

          <!-- Guest Details -->
          <tr>
            <td style="padding:32px 40px 0;">
              <p style="margin:0 0 16px; font-size:10px; letter-spacing:0.25em; text-transform:uppercase; color:#d97706; font-family:Arial,sans-serif; font-weight:700; border-bottom:1px solid #f0ebe3; padding-bottom:8px;">Guest Information</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:7px 0; font-size:12px; color:#78716c; font-family:Arial,sans-serif; width:40%; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Full Name</td>
                  <td style="padding:7px 0; font-size:14px; color:#1c1917; font-family:Arial,sans-serif;">${data.guestName}</td>
                </tr>
                <tr style="background:#faf8f5;">
                  <td style="padding:7px 8px; font-size:12px; color:#78716c; font-family:Arial,sans-serif; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Email</td>
                  <td style="padding:7px 8px; font-size:14px; color:#1c1917; font-family:Arial,sans-serif;"><a href="mailto:${data.guestEmail}" style="color:#78350f;">${data.guestEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding:7px 0; font-size:12px; color:#78716c; font-family:Arial,sans-serif; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Phone</td>
                  <td style="padding:7px 0; font-size:14px; color:#1c1917; font-family:Arial,sans-serif;">${data.guestPhone}</td>
                </tr>
                <tr style="background:#faf8f5;">
                  <td style="padding:7px 8px; font-size:12px; color:#78716c; font-family:Arial,sans-serif; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Party Size</td>
                  <td style="padding:7px 8px; font-size:14px; color:#1c1917; font-family:Arial,sans-serif;">${data.adultsNo} adult${data.adultsNo !== 1 ? "s" : ""}${data.kidsNo > 0 ? `, ${data.kidsNo} child${data.kidsNo !== 1 ? "ren" : ""}` : ""}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Stay Dates -->
          <tr>
            <td style="padding:28px 40px 0;">
              <p style="margin:0 0 16px; font-size:10px; letter-spacing:0.25em; text-transform:uppercase; color:#d97706; font-family:Arial,sans-serif; font-weight:700; border-bottom:1px solid #f0ebe3; padding-bottom:8px;">Stay Dates</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:7px 0; font-size:12px; color:#78716c; font-family:Arial,sans-serif; width:40%; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Check-in</td>
                  <td style="padding:7px 0; font-size:14px; color:#1c1917; font-family:Arial,sans-serif;">${fmt(data.checkinDate)}</td>
                </tr>
                <tr style="background:#faf8f5;">
                  <td style="padding:7px 8px; font-size:12px; color:#78716c; font-family:Arial,sans-serif; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Check-out</td>
                  <td style="padding:7px 8px; font-size:14px; color:#1c1917; font-family:Arial,sans-serif;">${fmt(data.checkoutDate)}</td>
                </tr>
                <tr>
                  <td style="padding:7px 0; font-size:12px; color:#78716c; font-family:Arial,sans-serif; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Duration</td>
                  <td style="padding:7px 0; font-size:14px; color:#1c1917; font-family:Arial,sans-serif; font-weight:700;">${nights} night${nights !== 1 ? "s" : ""}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Rooms & Pricing -->
          <tr>
            <td style="padding:28px 40px 0;">
              <p style="margin:0 0 16px; font-size:10px; letter-spacing:0.25em; text-transform:uppercase; color:#d97706; font-family:Arial,sans-serif; font-weight:700; border-bottom:1px solid #f0ebe3; padding-bottom:8px;">Rooms & Pricing</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f0ebe3; border-radius:4px; overflow:hidden;">
                <thead>
                  <tr style="background:#faf8f5;">
                    <th style="padding:10px 16px; font-size:10px; text-transform:uppercase; letter-spacing:0.1em; color:#78716c; font-family:Arial,sans-serif; text-align:left; font-weight:700;">Room</th>
                    <th style="padding:10px 16px; font-size:10px; text-transform:uppercase; letter-spacing:0.1em; color:#78716c; font-family:Arial,sans-serif; text-align:right; font-weight:700;">Rate</th>
                    <th style="padding:10px 16px; font-size:10px; text-transform:uppercase; letter-spacing:0.1em; color:#78716c; font-family:Arial,sans-serif; text-align:right; font-weight:700;">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  ${roomRows}
                </tbody>
                <tfoot>
                  <tr style="background:linear-gradient(90deg,#1c1917,#292524);">
                    <td colspan="2" style="padding:14px 16px; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#d97706; font-family:Arial,sans-serif; font-weight:700;">Estimated Total</td>
                    <td style="padding:14px 16px; font-size:18px; font-weight:700; color:#ffffff; font-family:Arial,sans-serif; text-align:right;">$${total.toLocaleString()} <span style="font-size:11px; font-weight:400; color:rgba(255,255,255,0.5);">USD</span></td>
                  </tr>
                </tfoot>
              </table>
            </td>
          </tr>

          ${experiencesList ? `
          <!-- Experiences -->
          <tr>
            <td style="padding:28px 40px 0;">
              <p style="margin:0 0 12px; font-size:10px; letter-spacing:0.25em; text-transform:uppercase; color:#d97706; font-family:Arial,sans-serif; font-weight:700; border-bottom:1px solid #f0ebe3; padding-bottom:8px;">Experiences of Interest</p>
              <p style="margin:0; font-size:14px; color:#1c1917; font-family:Arial,sans-serif; line-height:1.8;">${experiencesList}</p>
            </td>
          </tr>` : ""}

          <!-- Action Note -->
          <tr>
            <td style="padding:28px 40px 0;">
              <div style="background:#fef3c7; border-left:3px solid #d97706; border-radius:0 4px 4px 0; padding:16px 20px;">
                <p style="margin:0; font-size:13px; color:#92400e; font-family:Arial,sans-serif; line-height:1.7;">
                  <strong>Action Required:</strong> Please contact the guest within <strong>24 hours</strong> to confirm availability, discuss payment, and finalise the booking. This is a request — no payment has been taken yet.
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:40px; text-align:center; border-top:1px solid #f0ebe3; margin-top:32px;">
              <p style="margin:0 0 4px; font-size:11px; color:#a8a29e; font-family:Arial,sans-serif; letter-spacing:0.1em; text-transform:uppercase;">Pamoja Africa Reservations</p>
              <p style="margin:0; font-size:12px; color:#a8a29e; font-family:Arial,sans-serif;">This email was automatically generated from the booking form at <a href="https://pamojaafricatz.com" style="color:#78350f;">pamojaafricatz.com</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── POST /api/send-booking-email ───────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { data, bookingId }: { data: BookingData; bookingId: string } = await req.json();

    // Basic server-side validation
    if (!data.propertyId || !data.guestName || !data.guestEmail || !data.guestPhone) {
      return NextResponse.json({ error: "Missing required guest or property fields." }, { status: 400 });
    }
    if (data.selectedDates.length === 0) {
      return NextResponse.json({ error: "No dates selected." }, { status: 400 });
    }
    if (data.selectedRooms.length === 0) {
      return NextResponse.json({ error: "No rooms selected." }, { status: 400 });
    }

    const html = buildEmailHtml(data, bookingId);

    const { error } = await resend.emails.send({
       from: `Pamoja Africa Reservations <${process.env.NEXT_PUBLIC_SENDING_EMAIL}>`,
      // ── Test recipient — change to process.env.NEXT_PUBLIC_SENDING_EMAIL! in production
      to: ["albertsimtengu@gmail.com","asherikiisay@pamojaafricatz.com"],
      subject: `🏕️ New Booking Request TESTING — ${data.propertyName} | Ref: ${bookingId}`,
      html,
      replyTo: data.guestEmail,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Booking email failed:", err);
    return NextResponse.json({ error: err.message ?? "Unknown error" }, { status: 500 });
  }
}
