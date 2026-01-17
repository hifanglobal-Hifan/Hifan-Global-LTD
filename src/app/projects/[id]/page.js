import ProjectDetailContent from '@/components/pages/ProjectDetailContent';
import { projects } from '@/data/projects';

export const dynamicParams = false;

export async function generateMetadata({ params }) {
    const { id } = await params;
    const project = projects.find(p => p.id === id);

    return {
        title: project ? `${project.title} | Hifan Global Projects` : 'Project Not Found | Hifan Global',
        description: project ? project.shortDesc : 'Project details not found.',
    };
}

export default async function ProjectPage({ params }) {
    const { id } = await params;
    return <ProjectDetailContent id={id} />;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: String(project.id),
    }));
}
