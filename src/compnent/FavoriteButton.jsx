import react from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../RTK/slice";

export function FavoriteButton({ pokemonId }) {
    const isFavorite = useSelector((state) =>
        state.favorite.some((item) => item === pokemonId)
    );
const dispatch = useDispatch();
return (
    <button onClick={(e) => {
        e.stopPropagation();
        dispatch ( isFavorite ? favoriteSlice.actions.removeFavorite({ pokemonId }) : favoriteSlice.actions.addFavorite({ pokemonId }));
    }}
    style={{ color: isFavorite ? "red" : "gray" }}
    >
        {isFavorite ? "🖤" : "🤍"}
    </button>
  );
}
