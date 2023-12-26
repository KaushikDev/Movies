import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Home from "./components/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MovieDetail from "./components/movieDetail/movieDetail";
import PageNotFound from "./components/pageNotFound/pageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/movie/:imdbID" Component={MovieDetail} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
