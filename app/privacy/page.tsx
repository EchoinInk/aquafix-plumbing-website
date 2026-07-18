import type { Metadata } from "next";
import { PrivacyPage } from "../components/AquaSite";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Sample privacy policy for the fictional AquaFix Plumbing portfolio website.",
  alternates: { canonical: "/privacy" },
};
export default function Privacy() { return <PrivacyPage />; }
