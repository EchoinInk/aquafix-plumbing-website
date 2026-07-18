import type { Metadata } from "next";
import { AboutPage } from "../components/AquaSite";
export const metadata: Metadata = {
  title: "About AquaFix Plumbing",
  description: "Learn about AquaFix Plumbing's fictional company story, mission, values, team, service area, and workmanship guarantee.",
  alternates: { canonical: "/about" },
};
export default function About() { return <AboutPage />; }
