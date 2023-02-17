import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import './Reviews.scss'

export default function Reviews() {

    return (
        <main className="reviews-home">
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
