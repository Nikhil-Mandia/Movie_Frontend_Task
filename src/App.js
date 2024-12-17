import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchPage from "./pages/SearchPage";
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  return (
    <Router>
      <div>
        <h1 className="text-center mt-3">Movie</h1>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
