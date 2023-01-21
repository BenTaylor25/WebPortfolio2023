import './MyNav.scss'

export default function MyNav() {
    return (
        <nav>
            <a href="/" id="title">Ben Taylor</a>

            <ul>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/work">Work</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/analyses">Analyses</a>
                </li>
            </ul>
        </nav>
    );
}
