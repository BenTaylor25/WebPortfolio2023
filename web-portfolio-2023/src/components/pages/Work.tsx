import './Work.scss';

export default function Work() {
    return (
        <main className="work">

            <section className="entry">
                <img src="assets/work/scuderiaalphatauri.jpg" alt="Scuderia AlphaTauri Logo" />
                <div className="text">
                    <h1>Aero Systems Software Engineer Intern - Scuderia AlphaTauri</h1>
                    <h2>Jul 2023 - present</h2>
                    <p>
                        For my University placement year, I am a Software Engineer in
                        the Aerodynamics department of <a href="https://scuderia.alphatauri.com/en/">
                        AlphaTauri Formula 1 team</a>.
                        I am developing internal tools for various aero teams to
                        facilitate improvements to the performance of the cars.
                    </p>
                    <p>
                        The role also involves various IT tasks such as swapping RAM in
                        office PCs and reimaging devices before they can be repurposed.
                    </p>
                    <p>C#, WPF, HTML, CSS, JavaScript.</p>
                </div>
            </section>

            <section className="entry">
                <img src="assets/icon.png" alt="Ben Icon" />
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
                    <p>HTML, CSS, JavaScript.</p>
                </div>
            </section>

            <section className="entry">
                <a className="image" href="https://brookes.ac.uk">
                    <img src="assets/work/obu.png" alt="Oxford Brookes University Logo" />
                </a>
                <div className="text">
                    <h1>PAL Lead Tutor - Oxford Brookes University</h1>
                    <h2>Jul 2022 - May 2023</h2>
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
                    <p>Tutoring, Python, Java.</p>
                </div>
            </section>

            <section className="entry">
                <a className="image" href="https://digivue.co.uk">
                    <img src="assets/work/digivue.jpg" alt="DigiVue Logo" />
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
                    <p>Vue.js, C#, ASP.NET Core, Azure.</p>
                </div>
            </section>

            <section className="entry">
                <a className="image" href="https://codeninjas.co.uk/oxford-oxf-uk">
                    <img src="assets/work/codeninjas.jpg" alt="Code Ninjas Logo" />
                </a>
                <div className="text">
                    <h1>Computing Tutor - Code Ninjas Oxford</h1>
                    <h2>Sep 2021 - Jul 2022</h2>
                    <p>
                        At <a href="https://codeninjas.co.uk/">Code Ninjas</a> Oxford,
                        I taught a variety of different technologies to children, including Scratch,
                        JavaScript, and Electronics.
                    </p>
                    <p>
                        Unfortunately, the Oxford centre is no longer active,
                        but you can find out what Code Ninjas is about from the global site.
                    </p>
                    <p>Tutoring, Scratch, JavaScript.</p>
                </div>
            </section>

            <section className="entry">
                <a className="image" href="https://fuze.co.uk">
                    <img src="assets/work/fuze.png" alt="Fuze Technologies Logo" />
                </a>
                <div className="text">
                    <h1>Programming Tutor - Fuze Technologies</h1>
                    <h2>Oct 2018 - Mar 2021</h2>
                    <p>
                        My main role at <a href="https://fuze.co.uk">Fuze Technologies</a> was teaching
                        programming to children through simple games. This required me to break down the
                        concepts and communicate them. I also became proficient at finding errors quickly.
                    </p>
                    <p>Tutoring, Fuze4 Nintendo Switch, Fuze Basic.</p>
                </div>
            </section>
        </main>
    )
}
