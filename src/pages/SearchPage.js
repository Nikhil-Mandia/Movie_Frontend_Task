import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { addToFavourites, fetchMovie } from "../api/api";
import CustomTable from "../components/common/customTable";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");

  const columns = [
    { header: "poster", accessor: "Poster", isImg: true },
    { header: "Title", accessor: "Title" },
    { header: "Year", accessor: "Year" },
    { header: "Type", accessor: "Type" },
  ];

  const handleFetchMovie = async () => {
    try {
      const { Search } = await fetchMovie(searchQuery);
      setSearchError("");
      setMovies(Search);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFavourite = async (data) => {
    try {
      const res = await addToFavourites(data);
      console.log(res);

      alert("Movie added to favourites!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h3>Search for Movies</h3>

      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            className="form-control"
            placeholder={searchError && searchError}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            style={{
              width: "150px",
            }}
            onClick={() => {
              handleFetchMovie(searchQuery);
            }}
          >
            Click Me
          </button>
        </div>
        <Link to="/favourites" className="btn btn-secondary mt-3">
          View Favourites
        </Link>
      </div>

      <CustomTable
        data={Array.isArray(movies) && movies}
        columns={columns}
        onButtonClick={handleFavourite}
        buttonLabel="Favourite"
      />
    </div>
  );
};

export default SearchPage;
