import './Education.scss';

import EducationModule from '../../Education/EducationModule';

import modules from '../../data/educationModules.json';

export default function Education() {

    return (
        <main className="Education">
            <section id="education-institution">
                <h1>Oxford Brookes University (2021-2025)</h1>
                <h2>BSc Computer Science</h2>
                <section id="education-modules">
                    {
                        modules.brookes.map(module_ => {
                            return <EducationModule {...module_} />;
                        })
                    }
                </section>
            </section>
            <section id="education-institution">
                <h1>Other</h1>
                <h2>
                    These are non-Brookes university-level courses
                    I studied during my degree.
                </h2>
                <section id="education-modules">
                    {
                        modules.uniother.map(course => {
                            return <EducationModule {...course} />;
                        })
                    }
                </section>
            </section>
            <section id="education-institution">
                <h1>Wheatley Park Sixth Form (2019-2021)</h1>
                <h2>AS and A-Level</h2>
                <section id="education-modules">
                    {
                        modules.alevel.map(subject => {
                            return <EducationModule {...subject} />;
                        })
                    }
                </section>
            </section>
            <section id="education-institution">
                <h1>Wheatley Park School (2014-2019)</h1>
                <h2>GCSE</h2>
                <section id="education-modules">
                    {
                        modules.gcse.map(subject => {
                            return <EducationModule {...subject} />;
                        })
                    }
                </section>
            </section>
        </main>
    );
}
