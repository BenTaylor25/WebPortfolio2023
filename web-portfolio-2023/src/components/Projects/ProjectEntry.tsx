import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';

interface Project {
    name: string,
    time: string,
    description: string,
    technologies: string,
    imageURL: string,
    githubURL?: string,
    youtubeURL?: string,
    siteURL?: string,
}

export default function ProjectEntry(props: Project) {

    return (
        <section id="project-entry">
            <div id="info">
                <h1>{ props.name }</h1>
                <p>{ props.time }</p>
                <p>{ props.description }</p>
                <p id="technologies">Technologies: { props.technologies }.</p>

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
                    {
                        props.siteURL && 
                        <a href={props.siteURL}>
                            <LanguageIcon fontSize='large' />
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
