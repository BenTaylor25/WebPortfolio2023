import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import './ReviewsLanding.scss'

export default function ReviewsLanding() {

    return (
        <main className="reviews-landing">
            <h1>Reviews</h1>
            <p>In my free time, I enjoy reading books and playing video games.</p>
            <p>I also enjoy sharing my thoughts on books I've read and games I've played.</p>

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
