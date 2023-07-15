import './Fitness.scss';

export default function Fitness() {
    return (
        <main className="Fitness">
            <h1>Fitness</h1>
            <p>
                Fitness isn't a great passion of mine, but it is
                something that I care about. I was always a big
                kid growing up, but by January 2021 it was really
                bothering me and I decided to make a change.
            </p>
            <p>
                I documented my progress on&nbsp;
                <a href="https://www.instagram.com/bens__gym/">Instagram</a>.
            </p>
            <section id="transformation-gallery">
                <img
                    src={"assets/fitness/front-transformation.png"}
                    alt="front-facing comparison of me in January 2021 (113kg) and July 2023 (73kg)"
                />
                <img
                    src={"assets/fitness/side-transformation.png"}
                    alt="side-on comparison of me in January 2021 (113kg) and July 2023 (73kg)"
                />
                <img
                    src={"assets/fitness/back-transformation.png"}
                    alt="back-facing comparison of me in January 2021 (113kg) and July 2023 (73kg)"
                />
            </section>
            <img
                src={"assets/fitness/9-years.png"}
                alt="comparison image of me in 2014 and 2023"
            />
        </main>
    );
}
