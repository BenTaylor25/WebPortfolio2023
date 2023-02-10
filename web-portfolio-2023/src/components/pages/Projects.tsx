import ProjectEntry from "../Projects/ProjectEntry";
import './Projects.scss'

import projectsData from '../data/projectsData.json';

export default function Projects() {
    return (
        <main className="projects">
            <h1>Projects</h1>
            {
                projectsData.map(project => {
                    return (
                        <ProjectEntry key={project.name} {...project}></ProjectEntry>
                    )
                })
            }
        </main>
    );
}
