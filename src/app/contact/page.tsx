import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Book A Detail",
  description:
    "Book your car detailing, ceramic coating, or PPF service at Glossy Street. Contact Himanshu via phone, WhatsApp, or our booking form.",
};

export default function Page() {
  return <ContactForm />;
}
