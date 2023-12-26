import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Home from "./pages/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MovieDetail from "./pages/movieDetail/movieDetail";
import PageNotFound from "./pages/pageNotFound/pageNotFound";
import { StoreProvider } from "./common/store/Store";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/movie/:imdbID" Component={MovieDetail} />
            <Route path="*" Component={PageNotFound} />
          </Routes>
          <Footer />
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
