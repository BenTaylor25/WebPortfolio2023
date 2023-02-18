import { useState } from "react";

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

    function handleChange() {
        const searchInput = document.querySelector('input');
        if (searchInput?.id === "search-box") {
            setSearchQuery(searchInput.value);
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
                document.querySelector("input")?.id === "search-box" &&
                document.querySelector("input")?.value !== '' ||

                <>
                    <h2>Random Review</h2>
                    <p>(search '*' to view all)</p>
                    <ReviewEntry {...reviews[rnd(reviews.length)]} />
                </>
            }

            {
                document.querySelector("input")?.id === "search-box" &&
                document.querySelector("input")?.value !== '' &&

                reviews.filter(review => {
                    const searchBar = document.querySelector("input");
                    let searchQuery = "";
                    if (searchBar?.id === "search-box") {
                        searchQuery = searchBar.value;
                    }

                    return review.name.toLowerCase().includes(removeStar(searchQuery).toLowerCase());
                }).map((review, index) => {
                    return (
                        <ReviewEntry key={index} {...review} />
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

/**
 * Return a random number between 0 and n-1 inclusive.
 * 
 * @param n 
 */
function rnd(n: number): number {
    return Math.floor(Math.random() * n);
}

function removeStar(str: string): string {
    return str.replace('*', '');
}
