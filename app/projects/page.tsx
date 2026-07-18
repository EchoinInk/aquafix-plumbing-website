import type { Metadata } from "next";
import { ProjectsPage } from "../components/AquaSite";
export const metadata: Metadata = {
  title: "Completed Plumbing Projects",
  description: "View sample residential, commercial, bathroom, drainage, and hot water plumbing projects from AquaFix Plumbing.",
  alternates: { canonical: "/projects" },
};
export default function Projects() { return <ProjectsPage />; }
