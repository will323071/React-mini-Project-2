import React from "react";
import { getRegExp } from "korean-regexp";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPokemonByRegExp } from "../RTK/selector"
import { Card } from "../components/Card";

export function Search() {
    const [searchParams] = useSearchParams();
    const param = searchParams.get("pokemon");
    const reg = getRegExp(param);
    const pokemons = useSelector(selectPokemonByRegExp(reg));

    return (
        <>
         {pokemons.map((el) => (
            <Card key={el.id} pokemon={el} />
          ))}
        </>
    );
}
