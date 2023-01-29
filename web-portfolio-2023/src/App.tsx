import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core"

import MyNav from './components/base/MyNav'
import MyFooter from "./components/base/MyFooter";
import Home from './components/pages/Home'
import About from "./components/pages/About";
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
        </Routes>
      </BrowserRouter>

      <MyFooter />
    </div>
  )
}
