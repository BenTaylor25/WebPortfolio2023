import ProjectEntry from "../Projects/ProjectEntry";
import './Projects.scss'

export default function Projects() {

    return (
        <main className="projects">
            <h1>Projects</h1>

            <ProjectEntry name='Billiards'></ProjectEntry>
            <ProjectEntry name='DSAVisualiser'></ProjectEntry>
        </main>
    );
}
