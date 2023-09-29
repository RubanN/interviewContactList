import './App.css';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Header from "./components/Header"
import Home from  "./components/Home"
import MovieDetail from "./components/MovieDetail"
import PageNotFound from "./components/PageNotFound"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
       <Router>
            <Header/>
            <div className='container'>
              <Routes >
                  <Route>
                  <Route path="/" exact component={Home} />
                  <Route path="/movie/:imdbID" component={MovieDetail} />
                  <Route component={PageNotFound} />
                  </Route>
              </Routes>
            </div>
            <Footer/>
       </Router>
    </div>
  )
}

export default App