import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core"

import MyNav from './components/base/MyNav'
import MyFooter from "./components/base/MyFooter";
import Home from './components/pages/Home'
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Projects from "./components/pages/Projects";
import ReviewsLanding from "./components/pages/ReviewsLanding";
import ReviewPage from "./components/pages/ReviewsPage";
import NotFound from "./components/pages/NotFound";
import './App.scss'
import './components/pages/_AllPages.scss'

export default function App() {
  /** rerender on orientation change */
  const RROOC = useMediaQuery("(orientation: portrait)");

  return (
    <div className="App">
      {<MyNav /> || RROOC}

      <BrowserRouter>
        <Routes>
          <Route path="/WebPortfolio2023/" element={<Home />}></Route>
          <Route path="/WebPortfolio2023/about" element={<About />}></Route>
          <Route path="/WebPortfolio2023/work" element={<Work />}></Route>
          <Route path="/WebPortfolio2023/projects" element={<Projects />}></Route>
          <Route path="/WebPortfolio2023/reviews" element={<ReviewsLanding />}></Route>
          <Route path="/WebPortfolio2023/reviews/books" element={<ReviewPage page="books" />}></Route>
          <Route path="/WebPortfolio2023/reviews/games" element={<ReviewPage page="games" />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>

      <MyFooter />
    </div>
  )
}
