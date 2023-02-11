import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface Project {
    name: string,
    description: string,
    imageURL: string,
    githubURL?: string,
    youtubeURL?: string
}

export default function ProjectEntry(props: Project) {

    return (
        <section id="project-entry">
            <div id="info">
                <h1>{ props.name }</h1>
                <p>{ props.description }</p>

                <div id="links">
                    {
                        props.githubURL && 
                        <a href={props.githubURL}>
                            <GitHubIcon fontSize='large' />
                        </a> 
                    }
                    {
                        props.youtubeURL && 
                        <a href={props.youtubeURL}>
                            <YouTubeIcon fontSize='large' />
                        </a> 
                    }
                </div>
            </div>
            <div id="image">
                <img src={ props.imageURL } alt={ props.name } />
            </div>
        </section>
    )
}
