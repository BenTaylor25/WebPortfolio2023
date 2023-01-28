import './About.scss'

export default function About() {

    return (
        <main className='about'>
            <section className='bio'>
                <h1>Bio</h1>
                <p>
                    Hi, my name is Ben and I'm a Computer Science student at Oxford Brookes.
                    I love bringing ideas and designs to life through problem solving and
                    code, and am keen to pursuit a career in Desktop-, Web-, Mobile-,
                    or Game Development after I graduate.
                </p>
                <p>
                    Outside of tech, I am interested in Psychology, Philosophy, Language,
                    History, and Storytelling. When I'm not working on programming projects,
                    I enjoy watching Formula 1, playing video games, and learning German.
                </p>
                <img
                    src="src/assets/hillpicture.jpg"
                    alt="image of Ben sat on a hill with his dog next to him"
                />
            </section>
            <section className='skills'>
                <h1>Skills</h1>
                <section>
                    <h2>Advanced</h2>
                    <p>Python, Fuze4NS</p>
                    <p>HTML</p>
                    <h2>Confident</h2>
                    <p>JavaScript, TypeScript, Java, C++</p>
                    <p>VSCode, Git, GitHub, React, CSS</p>
                    <h2>Knowledgeable</h2>
                    <p>C#, Dart, Rust, C, Go</p>
                    <p>SCSS, Flutter, SQL, Vue.js</p>
                    <h2>Beginner</h2>
                    <p>Ruby, Kotlin, Lua, Swift</p>
                    <p>Tauri</p>
                    <h2>Soft Skills</h2>
                    <p>Communication, Planning, Time Management</p>
                </section>
            </section>
            <section className='education'>
                <h1>Education</h1>
                <section>
                    <h2>Degree</h2>
                    <h3>BSc Computer Science at Oxford Brookes (2021-2025)</h3>
                    <ul className='modules'></ul>
                </section>
                <section>
                    <h2>A-Level</h2>
                    <h3>Wheatley Park Sixth Form</h3>
                    <ul className="subjects"></ul>
                </section>
                <p>See my full education background on <a href="https://www.linkedin.com/in/bentaylor25">LinkedIn</a></p>
            </section>
            <section className='other'>
                <h1>Other</h1>
                <section>
                    <h2>Student Rep</h2>
                    <p></p>
                </section>
            </section>
        </main>
    )
}
