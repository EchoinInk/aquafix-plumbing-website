import type { Metadata } from "next";
import { ContactPage } from "../components/AquaSite";
export const metadata: Metadata = {
  title: "Contact & Quote Request",
  description: "Contact AquaFix Plumbing to book a plumber, request a quote, or call for sample emergency plumbing support in Auckland.",
  alternates: { canonical: "/contact" },
};
export default function Contact() { return <ContactPage />; }
