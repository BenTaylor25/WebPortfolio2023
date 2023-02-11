
interface Project {
    name: string,
    description: string,
    imageURL?: string,
    githubURL?: string,
    youtubeURL?: string
}

export default function ProjectEntry(props: Project) {

    return (
        <section id="project-entry">
            <div id="info">
                <h1>{ props.name }</h1>
                <p>{ props.description }</p>
            </div>
            <div id="image">
                <img src={ props.imageURL } alt={ props.name } />
            </div>
        </section>
    )
}
