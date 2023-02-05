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
                <a className="image" href="https://brookes.ac.uk">
                    <img src="src/assets/work/obu.png" alt="Oxford Brookes University Logo" />
                </a>
                <div className="text">
                    <h1>PAL Lead Tutor - Oxford Brookes University</h1>
                    <h2>Jul 2022 - present</h2>
                    <p>
                        Having performed well in the first year of <a href="https://brookes.ac.uk">University</a>,
                        I was offered a role helping the 2022-2023 first-year students, leading the Peer-Assisted 
                        Learning (PAL) scheme.
                    </p>
                    <p>
                        I set up a community Discord server complete with relevant and organised resources,
                        a ticketing system for private help requests, and a well-organised channel list.
                        I am leading a team of second-year students in delivering academic and logistical help.
                    </p>
                    <p>
                        I was required to give a short speech in front of approximately 120 first-year students
                        to introduce the PAL scheme. Many of the students were struggling with a module exclusive
                        to the Artificial Intelligence course. Where none of us PAL students studied this course,
                        we were unable to offer direct help. I took the initiative and, both: informed the module
                        leader, and encouraged the students to speak up. As a result, over half of the AI students
                        made use of the module leader's drop-in hours, which are usually neglected.
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
