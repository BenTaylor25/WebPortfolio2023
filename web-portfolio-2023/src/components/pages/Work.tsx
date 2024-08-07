import './Work.scss';

export default function Work() {
    return (
        <main className="work">

            <section className="entry">
                <img src="assets/work/racingbulls.jpg" alt="Racing Bulls F1 Logo" />
                <div className="text">
                    <h1>Aero Systems Software Engineer Intern - Racing Bulls F1</h1>
                    <h2>Jan 2024 - Aug 2024</h2>
                    <p>
                        In January 2024, AlphaTauri rebranded to&nbsp;
                        <a href="https://www.visacashapprb.com/en/">Racing Bulls</a>.
                    </p>
                    <p>
                        It was in the new year where the Automatic Pressure Tap testing project
                        really started to pick up.
                        Early on, there was a big push to get the system production-ready.
                        However when I got a build ready for testing, we determined that
                        the blockage test looked acceptable, but the leakage test was copmletely
                        unusable. I moved the box to a quiet area and got working on reimplementing
                        the logic, this time cleaner, better-documented and seperated out into its
                        own file.
                        There were a few ideas that I tried and failed with, but I learned from them
                        and within about a week or two, I had a fully working pressure test system.
                        Before we could send the system to production, I was asked to make a few
                        easy quality-of-life fixes, but also had to navigate the Pressure Tap
                        numbering system; if a part has 4 pressure taps, it makes sense for them
                        to be numbered 1-4, however if this part forms an assembly with other parts
                        and the assembly has 20 taps, the original part might actually be plumed up
                        to ports 9-12. This difference meant that we didn't have a standard way of
                        nubmering, which hadn't been a serious issue until now. I lead a discussion
                        with the Head of Technology, the Deputy Head of Model Design, the Head of
                        Model Shop and the Head of Wind Tunnel Engineering to propose 1-n on every
                        individual part and have assemblies be a problem we think about later.
                        Model Design then commited to implementing this on all future parts, and
                        offered to fix the numbering on old parts as required.
                        This allowed me to put the final pieces together and send the system to
                        production.
                    </p>
                    <p>
                        On of the box connectors was set to be upgraded in a second revision.
                        Overall this was a beneficial change, but it would require a change
                        to Software side as the Software side made assumptions about the box.
                        I needed a way to handle both of the box revisions at the same time,
                        so I re-evaluated the variable/constant seperation between the box and
                        the client application, and moved all of the box-specific values to
                        the PLC program. This meant that the Software side could connect to
                        any PIT200 box and read its specification to know how to use it.
                    </p>
                    <p>
                        With the Automatic Pressure Tap Testing system now in production,
                        and with all of the technical context that the company would loose
                        with my departure, I requested that a full-time member of the Aero Systems
                        Group join the project rather than it just be passed down by interns.
                        In my last month, I mentored the allocated full-time member new ASG intern
                        through the system and had them develop the next stage of the application:
                        pneumatic loom testing. As a testament to their ability as Engineers and
                        my experience of tutoring, we were able to get the core functionality of
                        the loom test working and flagging the right issues without me writing
                        any of the code.
                        In order for them to pick my brain as much as possible before the end
                        (and because I had no concern that they would be able to polish the
                        system up without my help) we moved straight on to stage 3: Assembly Testing.
                        Pneumatically, this test is the same as a part. It becomes extremely
                        difficult however when you need to match up pressure taps that go through
                        one part into another, or if you have multiple parts connected to one
                        terminator which leaves you with an offset that you have to figure out.
                        It was a tough challenge, but with the help of the new intern, the
                        full-time ASG member, a Model Designer that had context on how
                        pressure taps are done manually through Excel, and the ASG member that
                        maintains the CAD Pressure Tap information export tool, I was able to
                        formalise a strategy for adapting the data we capture such that parts
                        are uneffected and assemblies can be represented nicely.
                    </p>
                    <p>C#, WPF, Beckhoff PLC, Structured Text, JavaScript.</p>
                </div>
            </section>

            <section className="entry">
                <img src="assets/work/scuderiaalphatauri.jpg" alt="Scuderia AlphaTauri Logo" />
                <div className="text">
                    <h1>Aero Systems Software Engineer Intern - Scuderia AlphaTauri</h1>
                    <h2>Jul 2023 - Jan 2024</h2>
                    <p>
                        For my University placement year, I was a Software Engineer in
                        the Aerodynamics department of Scuderia AlphaTauri Formula 1 team.
                        I developed internal tools for various groups to facilitate
                        improvements to the performance of the cars.
                    </p>
                    <p>
                        The project where I spent the most of my time was an Automatic
                        Pressure Tap testing system. F1 teams collect air pressure
                        data from different areas of the car during Wind Tunnel runs and
                        Track sessions. This along with CFD Probing allows us to create
                        heatmap displays critical to cross-domain correlation.
                        This falls apart however, if the data we read from pressure taps
                        is erronous due to a blockage or damage in the line between the
                        car surface and the scanner port.
                        My project sends a known pressure down these lines in a particular
                        way and measures the response to determine if there is an issue and
                        what that issue is.
                        The hardware box for this project (that contains pressure scanners
                        and solenoid valves) was already built up when I arrived and the
                        Software UI was mostly built out already too, however the pressure
                        tests were unreliable and -- as I would later discover -- incorrectly
                        implemented.
                        I spent much of my first months learning WPF, cleaning up some
                        inconsistencies with the codebase and aligning it with the coding
                        standards as best I could without rewriting everything.
                        My first major feature was to export pressure over time data to
                        a file that could be read in a program called Pi Toolbox.
                        The system had a 3D view of Wind Tunnel parts as you're testing them,
                        but some parts are symmetrical and don't have a dedicated .stl file
                        to save storage space. I performed some pattern matching on the
                        Part Number string to determine whether a part was mirrored (according
                        to the Part Numbering standard) and performed the mirroring operations
                        on the existing corresponding part as required.
                    </p>
                    <p>
                        The hardware side of the Pressure Tap testing project is powered by
                        a Beckhoff PLC. I had the opportunity to attend a 2-day PLC Programming
                        training course hosted by Beckhoff in Huntingdon. This gave me a much
                        greater context of how the system worked and enabled me to make
                        improvements down the line.
                    </p>
                    <p>
                        The role also involves various IT tasks such as swapping RAM in
                        office PCs, reimaging devices before they can be repurposed,
                        recording and editing videos for LinkedIn, and panelling webinars.
                    </p>
                    <p>C#, WPF, Beckhoff PLC, Structured Text, JavaScript.</p>
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
