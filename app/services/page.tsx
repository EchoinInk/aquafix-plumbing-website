import type { Metadata } from "next";
import { ServicesPage } from "../components/AquaSite";
export const metadata: Metadata = {
  title: "Plumbing Services in Auckland",
  description: "Emergency plumbing, blocked drains, leak detection, hot water, bathroom, kitchen, commercial plumbing, and preventative maintenance in Auckland.",
  alternates: { canonical: "/services" },
};
export default function Services() { return <ServicesPage />; }
