import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("RESEND_API_KEY"); // Replace "YOUR_API_KEY_HERE" with your actual API key
const fromEmail = process.env.FROM_EMAIL;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return NextResponse.error(new Error("Method Not Allowed"), { status: 405 });
  }

  const { email, subject, message } = req.body;
  console.log(email, subject, message);

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <div>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </div>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error(error, { status: 500 });
  }
}
