import { ProjectDetailPage } from "../../components/AquaSite";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectDetailPage slug={slug}/>;
}
