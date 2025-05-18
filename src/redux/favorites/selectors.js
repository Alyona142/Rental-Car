export const selectFavorites = (state) => state.favorites.favoritesList;

export const selectIsFavorite = (id) => (state) =>
  state.favorites.favoritesList.some((item) => item.id === id);
