import Review from "../Reviews/Review";
import { ReviewProps } from "../Reviews/Review";
import "./ReviewsPage.scss"

type Props = {
    page: "books" | "games";
}

export default function ReviewPage({page}: Props) {

    let reviews: ReviewProps[] = [
        {
            name: "Dark Souls", 
            link: "https://en.wikipedia.org/wiki/Dark_Souls", 
            rating: "9.5/10", 
            review: "lorem ipsum dolor sit amet"
        }
    ]

    return (
        <main className="reviews-page">
            <h1>{capitalizeFirst(page)}</h1>

            <input
                type="text"
                placeholder={`Search ${page}`} 
            />

            <Review {...reviews[0]} />
        </main>
    );
}

function capitalizeFirst(text: string): string {
    if (text.length <= 1) {
        return text.toUpperCase();
    }

    return text[0].toUpperCase() + text.slice(1);
}
