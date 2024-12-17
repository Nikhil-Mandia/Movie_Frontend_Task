import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomTable from "../components/common/customTable";
import { fetchFavourites } from "../api/api";

const FavouritesPage = () => {
  const [favourites, setFavourites] = useState([]);
  const columns = [
    { header: "poster", accessor: "poster", isImg: true },
    { header: "Title", accessor: "title" },
    { header: "Year", accessor: "year" },
    { header: "Type", accessor: "type" },
  ];

  useEffect(() => {
    handleFetchMovie();
  }, []);

  const handleFetchMovie = async () => {
    try {
      const { data } = await fetchFavourites();
      setFavourites(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h3>Favourites</h3>
      <CustomTable
        data={Array.isArray(favourites) && favourites}
        columns={columns}
        buttonLabel="Favourite"
      />
    </div>
  );
};

export default FavouritesPage;
