"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "mediasaur@gmail.com",
    subject: `Portfolio contact from ${name}`,
    text: `From: ${name} (${email})\n\n${message}`,
  })
}