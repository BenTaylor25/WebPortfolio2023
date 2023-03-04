import "./ReviewEntry.scss"

export type ReviewProps = {
    name: string;
    author: string;
    rating: string;
    review: string;
    genre: string;
    link: string;
}

export default function ReviewEntry(props : ReviewProps) {

    return (
        <article className="review">
            <header>
                <h1><a href={props.link} target="_blank">{props.name}</a></h1>
                <h2>{props.rating}</h2>
                <h3>{props.author}</h3>
            </header>
            <p>
                {props.review}
            </p>
            <p>{props.genre}</p>
        </article>
    );
}
