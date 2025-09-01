import React from "react";
import { useSelector } from "react-redux";
import { selectFavoritePokemonById } from "../RTK/selector";
import { Card } from "../components/Card";

export function Favorite() {
   const pokemons = useSelector(selectFavoritePokemonById);
    return (
        <>
            {pokemons.map((el) => (
                <Card key={el.id} pokemon={el} />
            ))}
        </>
    );
}
