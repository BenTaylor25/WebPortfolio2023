import { useState } from 'react';
import './MyNav.scss'

export default function MyNav() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav>
            <a href="/" id="title">Ben Taylor</a>

            <div className="hamburger" onClick={() => setShowDropdown(!showDropdown)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

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
