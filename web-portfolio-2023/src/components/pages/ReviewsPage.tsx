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

    const searchQueryRef = useRef('');

    function handleChange() {
        const searchInput = document.querySelector('input');
        if (searchInput?.id === "search-box") {
            searchQueryRef.current = searchInput.value;
        }
    }

    return (
        <main className="reviews-page">
            <h1>{capitalizeFirst(page)}</h1>

            <input
                id="search-box"
                type="text"
                placeholder={`Search ${page}`}
                onChange={handleChange}
            />

            {
                reviews.filter(review => {
                    const searchBar = document.querySelector("input");
                    let searchQuery = "";
                    if (searchBar?.id === "search-box") {
                        searchQuery = searchBar.value;
                    }

                    return review.name.includes(searchQueryRef.current);
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
