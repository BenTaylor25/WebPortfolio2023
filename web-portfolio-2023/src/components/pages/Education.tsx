import './Education.scss';

import EducationModule from '../Education/EducationModule';

import modules from '../data/educationModules.json';

export default function Education() {

    return (
        <main className="Education">
            <section id="education-institution">
                <h1>Oxford Brookes University (2021-2025)</h1>
                <h2>BSc Computer Science</h2>
                <section id="education-modules">
                    {
                        modules.brookes.map(bm => {
                            return <EducationModule {...bm} />;
                        })
                    }
                </section>
            </section>
        </main>
    );
}
