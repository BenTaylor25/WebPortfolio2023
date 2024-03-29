import './EducationModule.scss';

export type ModuleProps = {
    name: string,
    date: string,
    grade: string,
    text: string,
}

export default function EducationModule(props: ModuleProps) {
    return (
        <article className="module">
            <h1>{ props.name }</h1>
            <h2>[{ props.date }] : { props.grade }</h2>
            <p>{ props.text }</p>
        </article>
    );
}
