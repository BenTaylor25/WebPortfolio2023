import { useMediaQuery } from "@material-ui/core"
import MyNav from './components/base/MyNav'
import './App.scss'

function App() {
  const test = useMediaQuery("(orientation: portrait)");
  console.log(test);

  return (
    <div className="App">
      {<MyNav /> || test}
      <p>this is another test</p>
    </div>
  )
}

export default App

/*
  look into
  https://usehooks-ts.com/react-hook/use-media-query
*/