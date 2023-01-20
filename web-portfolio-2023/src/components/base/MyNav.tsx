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
                    <a href="/pricing">Pricing</a>
                </li>
            </ul>
        </nav>
    );
}
