import { useRef, useState } from "react";

import ReviewEntry from "../Reviews/ReviewEntry";
import { ReviewProps } from "../Reviews/ReviewEntry";
import "./ReviewsPage.scss"

import bookReviews from "../data/bookReviews.json"
import gameReviews from "../data/gameReviews.json"

type Props = {
    page: "books" | "games";
}

export default function ReviewsPage({page}: Props) {
    const reviews: ReviewProps[] = (page == "books") ? bookReviews : gameReviews;

    const [searchQuery, setSearchQuery] = useState('');
    const searchQueryRef = useRef();

    return (
        <main className="reviews-page">
            <h1>{capitalizeFirst(page)}</h1>

            <input
                id="search-box"
                ref={searchQueryRef}
                type="text"
                placeholder={`Search ${page}`} 
            />

            {
                reviews.filter(review => {
                    const searchBar = document.querySelector("input");
                    let searchQuery = "";
                    if (searchBar?.id === "search-box") {
                        searchQuery = searchBar.value;
                    }

                    return review.name.includes(searchQuery);
                }).map(review => {
                    return (
                        <ReviewEntry {...review} />
                    );
                })
            }
        </main>
    );
}

function capitalizeFirst(text: string): string {
    if (text.length <= 1) {
        return text.toUpperCase();
    }

    return text[0].toUpperCase() + text.slice(1);
}
