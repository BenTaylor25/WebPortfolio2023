import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import './ReviewsLanding.scss'

export default function ReviewsLanding() {

    return (
        <main className="reviews-landing">
            <h1>Reviews</h1>
            <div id="subheader">
                <p>In my free time, I enjoy reading books and playing video games.</p>
                <p>I love sharing interpretations, and recommending my favourites.</p>
            </div>
            <div className='rating-key'>
                <p>0-3: not recommended</p>
                <p>3-5: underwhelming</p>
                <p>5-6: good</p>
                <p>6-8: great</p>
                <p>8+: incredible</p>
            </div>

            <div id="button-container">
                <div>
                    <a href="/WebPortfolio2023/reviews/books">
                        <MenuBookIcon className='icon'/>
                        <p>Books</p>
                    </a>
                </div>
                <div>
                    <a href="/WebPortfolio2023/reviews/games">
                        <SportsEsportsIcon className='icon'/>
                        <p>Games</p>
                    </a>
                </div>
            </div>
        </main>
    );
}
