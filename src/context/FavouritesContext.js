import React, { createContext, useState, useContext } from 'react';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (favourite) => {
    setFavourites((prevFavourites) => [...prevFavourites, favourite]);
  };

  return (
    <FavouritesContext.Provider value={{ favourites, setFavourites, addFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
