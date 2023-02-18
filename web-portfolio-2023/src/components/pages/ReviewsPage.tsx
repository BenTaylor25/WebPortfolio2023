import Review from "../Reviews/Review";
import { ReviewProps } from "../Reviews/Review";
import "./ReviewsPage.scss"

import bookReviews from "../data/bookReviews.json"
import gameReviews from "../data/gameReviews.json"

type Props = {
    page: "books" | "games";
}

export default function ReviewsPage({page}: Props) {
    let reviews: ReviewProps[] = (page == "books") ? bookReviews : gameReviews;

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
