import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './MyFooter.scss'

export default function MyFooter() {

    return (
        <footer>
            <div className='link-container'>
                <a href="https://www.linkedin.com/in/bentaylor25">
                    <LinkedInIcon fontSize='large' />
                </a>
                <a href="https://github.com/bentaylor25">
                    <GitHubIcon fontSize='large' />
                </a>
                <a href="https://youtube.com/@bentaylor25">
                    <YouTubeIcon fontSize='large' />
                </a>
            </div>
        </footer>
    )
}
