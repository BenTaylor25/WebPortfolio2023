import "./ReviewEntry.scss"

export type ReviewProps = {
    name: string;
    link: string;
    rating: string;
    review: string;
}

export default function ReviewEntry(props : ReviewProps) {

    return (
        <article className="review">
            <header>
                <h1><a href={props.link}>{props.name}</a></h1>
                <h2>{props.rating}</h2>
            </header>
            <p>
                {props.review}
            </p>
        </article>
    );
}
