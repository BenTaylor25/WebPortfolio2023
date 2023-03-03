import './About.scss'

export default function About() {

    return (
        <main className='about'>
            <section className='bio'>
                <div className='text'>
                    <h1>Bio</h1>
                    <p>
                        Hi, my name is Ben and I'm a Computer Science student at Oxford Brookes.
                        I love bringing ideas and designs to life through problem solving and
                        code, and am keen to pursuit a career in Desktop-, Web-, Mobile-,
                        or Game Development after I graduate.
                    </p>
                    <br />
                    <p>
                        Outside of tech, I enjoy discussing Philosophy and Storytelling,
                        and learning about Psychology, Language, and History. When I'm
                        not working on programming projects or getting several weeks ahead
                        of my uni course, I enjoy watching Formula 1, playing video games,
                        and learning German.
                    </p>
                </div>
                <img
                    src="assets/hillpicture.jpg"
                    alt="image of Ben sat on a hill with his dog next to him"
                />
            </section>
            <section className='skills'>
                <img
                    src="assets/about/laptop.jpg"
                    alt="image of Ben sat working on a laptop"
                />
                <div>
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
                </div>
            </section>
            <section className='education'>
                <div>
                    <h1>Education</h1>
                    <section>
                        <h2>Degree</h2>
                        <h3>
                            BSc Computer Science [4.0 GPA]
                            <br />
                            at Oxford Brookes (2021-2025)
                        </h3>
                        <table className='modules'>
                            <tr>
                                <th style={{width: "80%"}}>Module Name</th>
                                <th style={{width: "20%"}}>Result</th>
                            </tr>
                            <tr>
                                <td>Problem Solving and Programming</td>
                                <td>A+ (96%)</td>
                            </tr>
                            <tr>
                                <td>Foundations of Computer Systems</td>
                                <td>A+ (77%)</td>
                            </tr>
                            <tr>
                                <td>Basic Communications and PC Networking</td>
                                <td>A (70%)</td>
                            </tr>
                            <tr>
                                <td>Information Systems</td>
                                <td>A+ (93%)</td>
                            </tr>
                            <tr className='highlight'>
                                <td>Object Oriented Programming</td>
                                <td>A+ (98%)</td>
                            </tr>
                            <tr>
                                <td>DevOps</td>
                                <td>A+ (84%)</td>
                            </tr>
                            <tr>
                                <td>Mathematics for Computing</td>
                                <td>A+ (100%)</td>
                            </tr>
                            <tr className='highlight'>
                                <td>Software Development in C and C++</td>
                                <td>A+ (100%)</td>
                            </tr>
                            <tr className='highlight'>
                                <td>Data Structures and Algorithms</td>
                                <td>A+ (100%)</td>
                            </tr>
                            <tr>
                                <td>Foundations of Security</td>
                                <td>A (73%)</td>
                            </tr>
                            <tr>
                                <td>Innovative Product Development</td>
                                <td>[Sep22-May22]</td>
                            </tr>
                            <tr>
                                <td>Foundations of Computation</td>
                                <td>[Jan23-May23]</td>
                            </tr>
                            <tr className='highlight'>
                                <td>Databases</td>
                                <td>[Jan23-May23]</td>
                            </tr>
                            <tr className='highlight'>
                                <td>Web App Development</td>
                                <td>[Jan23-May23]</td>
                            </tr>
                        </table>
                    </section>
                    <p>See my full education background on <a href="https://www.linkedin.com/in/bentaylor25">LinkedIn</a></p>
                </div>
                <img
                    src=""
                    alt="[to be added]"
                />   {/* Replace with image of graduation in 2025? */}
            </section>
            <section className='other'>
                <img
                    src="assets/about/presentation.jpg"
                    alt="image of Ben giving presentation PAL"
                />
                <div>
                    <h1>Other</h1>
                    <section>
                        <h2>Student Rep</h2>
                        <p>
                            For the duration of my degree, I have been a Student Representative.
                            This is an unpaid role where I discuss the quality and scope of lectures
                            and seminars, and feedback to the module leaders about how the course
                            can be improved for future years.
                            <br />
                            While achieving my degree retains priority, leaving a positive impact on
                            the course is something I take pride in.
                        </p>
                    </section>
                </div>
            </section>
        </main>
    )
}
