import ProjectEntry from "../Projects/ProjectEntry";
import './Projects.scss'

import * as projectsData from '../../projectsData.json';

export default function Projects() {
    // for (let proj of projectsData) {
    //     console.log(proj);
    // }
    console.log(projectsData);

    return (
        <main className="projects">
            <h1>Projects</h1>


            {/* <ProjectEntry name='Billiards'></ProjectEntry> */}
            {/* <ProjectEntry name='DSAVisualiser'></ProjectEntry> */}
        </main>
    );
}
