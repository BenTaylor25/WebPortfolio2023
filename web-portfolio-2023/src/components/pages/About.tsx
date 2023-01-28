import './About.scss'

export default function About() {

    return (
        <main className='about'>
            <section className='bio'>
                <h1>Bio</h1>
                <p>Lorem ipsum</p>
            </section>
            <section className='skills'>
                <h1>Skills</h1>
                <section>
                    <h2>Advanced</h2>
                    <p>Python, HTML, Fuze4NS</p>
                    <h2>Confident</h2>
                    <p>JavaScript, TypeScript, Java, C++</p>
                    <p>VSCode, Git, React</p>
                    <h2>Knowledgeable</h2>
                    <p>C#, Dart, Rust, C, Go</p>
                    <p>Flutter, SQL, Vue.js</p>
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
