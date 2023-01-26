import { useMediaQuery } from "@material-ui/core"

import MyNav from './components/base/MyNav'
import MyFooter from "./components/base/MyFooter";
import Home from './components/pages/Home'
import './App.scss'

export default function App() {
  /** rerender on orientation change */
  const RROOC = useMediaQuery("(orientation: portrait)");

  return (
    <div className="App">
      {<MyNav /> || RROOC}
      <Home />
      <MyFooter></MyFooter>
    </div>
  )
}
