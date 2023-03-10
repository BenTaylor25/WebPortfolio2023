import { useState } from 'react';
import './MyNav.scss'

export default function MyNav() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav>
            <a href="/WebPortfolio2023/" id="title">Ben Taylor</a>

            <div className="hamburger" onClick={() => setShowDropdown(show => !show)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            { (!screenPortrait() || showDropdown) &&
                <ul>
                    <li>
                        <a href="/WebPortfolio2023/about">About</a>
                    </li>
                    <li>
                        <a href="/WebPortfolio2023/work">Work</a>
                    </li>
                    <li>
                        <a href="/WebPortfolio2023/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/WebPortfolio2023/reviews">Reviews</a>
                    </li>
                </ul>
            }
        </nav>
    );
}

function navOptions() {
    return (
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
    )
}

function screenPortrait(): boolean {
    const { innerWidth, innerHeight } = window;

    return innerWidth < innerHeight;
}
