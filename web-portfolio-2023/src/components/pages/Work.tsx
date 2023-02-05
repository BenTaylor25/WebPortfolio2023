import './Work.scss';

export default function Work() {
    return (
        <main className="work">
            <section className="entry">
                <img src="src/assets/icon.png" alt="Ben Icon" />
                <div className="text">
                    <h1>Freelance Web Developer</h1>
                    <h2>May 2022 - present</h2>
                    <p>
                        I designed, developed, and continue to maintain the
                        website for <a href="https://decorareltd.co.uk">Decorare</a>.
                        The reputable Decorare team are experienced in delivering
                        high-quality interior and exterior decorating as well as
                        landscaping and garden maintenance.
                    </p>
                </div>
            </section>

            <section className="entry">
                <a className="image" href="https://digivue.co.uk">
                    <img src="src/assets/work/digivue.jpg" alt="DigiVue Logo" />
                </a>
                <div className="text">
                    <h1>Full Stack Web Developer - DigiVue</h1>
                    <h2>May 2022 - Jul 2022</h2>
                    <p>
                        In my first year at Oxford Brookes, I was offered a voluntary role
                        with <a href="https://digivue.co.uk">DigiVue</a> to work on the upcoming DigiAsk
                        product: a presentation system that makes in-person meetings more interactive,
                        and online meetings possible. 
                    </p>
                    <p>
                        On the backend, I helped fix an issue where slides imported from .pdf or .pptx formats
                        would be displayed in a different order by DigiVue. This involved adding a new field
                        to one of the database tables, and populating it in C#.
                    </p>
                    <p>
                        On the frontend, I helped implement a quick-select option to the presentation; the user
                        is shown a grid preview of slides in an overlay menu. Clicking one of the slides will
                        close the menu and jump the presentation to that slide.
                    </p>
                </div>
            </section>
        </main>
    )
}
