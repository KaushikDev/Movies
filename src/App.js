import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Home from "./pages/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Watchlist from "./pages/watchlist/watchlist";
import Favorites from "./pages/favorites/favorites";
import MovieDetail from "./pages/movieDetail/movieDetail";
import PageNotFound from "./pages/pageNotFound/pageNotFound";
import { StoreProvider } from "./common/store/Store";
import PageContainer from "./components/container/pageContainer";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <Header />
          <PageContainer>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/movie/:imdbID" Component={MovieDetail} />
              <Route path="/watchlist" Component={Watchlist} />
              <Route path="/favorites" Component={Favorites} />
              <Route path="*" Component={PageNotFound} />
            </Routes>
          </PageContainer>
          <Footer />
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
