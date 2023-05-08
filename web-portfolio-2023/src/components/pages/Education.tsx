import './Education.scss';

import EducationModule from '../Education/EducationModule';
import { ModuleProps } from '../Education/EducationModule';

export default function Education() {
    const test: ModuleProps[] = [
        {
            name: "programming",
            date: "sep2021-dec2021",
            grade: "A+",
            text: "I learnt programming",
        },
        {
            name: "networking",
            date: "sep2021-dec2021",
            grade: "A",
            text: "networking",
        },
        {
            name: "systems",
            date: "sep2021-dec2021",
            grade: "A+",
            text: "systems",
        }
    ];

    return (
        <main className="Education">
            <section id="education-institution">
                <h1>Oxford Brookes University (2021-2025)</h1>
                <h2>BSc Computer Science</h2>
                <section id="education-modules">
                    {
                        test.map(t => {
                            return <EducationModule {...t} />;
                        })
                    }
                    {/* <EducationModule {...test} /> */}
                </section>
            </section>
        </main>
    )
}
