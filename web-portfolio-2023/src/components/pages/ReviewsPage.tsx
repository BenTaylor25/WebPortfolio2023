import "./ReviewsPage.scss"

type Props = {
    page: "books" | "games";
}

export default function ReviewPage({page}: Props) {

    return (
        <main className="reviews-page">
            <h1>{capitalizeFirst(page)}</h1>

            <input
                type="text"
                placeholder={`Search ${page}`} 
            />
        </main>
    );
}

function capitalizeFirst(text: string): string {
    if (text.length <= 1) {
        return text.toUpperCase();
    }

    return text[0].toUpperCase() + text.slice(1);
}
