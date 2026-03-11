import { sendEmail } from "@/app/actions/sendEmail"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page"
}


export default function Contact() {
  return (
    <main>
      <h1>Contact</h1>
      <form action={sendEmail}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">Send</button>
      </form>
    </main>
  )
}