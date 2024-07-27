import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import { Container, styled } from "@mui/material";
import { CharactersList } from "../components/character/CharacterList";
import { useDebounce } from "use-debounce";
import { useSearchParams } from "react-router-dom";
import { serializeObjectToQueryParams } from "../utils/helpers/general";

const fetchCharacters = async (search, gender) => {
  try {
    const queryParams = serializeObjectToQueryParams({
      name: search,
      gender: gender,
    });
    const serachParams = search ? "?name=" + search : "";
    const reasponse = await fetch(
      "https://rickandmortyapi.com/api/character" + queryParams
    );
    const { results } = await reasponse.json();
    return results;
  } catch (error) {
    throw new Error("Somthing went wrong!");
  }
};
const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  const [searchByName, setSearchByName] = useState("");
  const [searchParams] = useSearchParams();
  const gender = searchParams.get("gender") || "";


  const [searchByNameDebouce] = useDebounce(searchByName, 1000);

  useEffect(() => {
    
    fetchCharacters(searchByNameDebouce, gender)
      .then((data) => setCharacters(data))
      .catch((error) => console.log(error));
  }, [searchByNameDebouce, gender]);

  const serachByNameChange = (e) => {
    setSearchByName(e.target.value);
  };
  return (
    <StyledContainer>
      <header>
        <SearchBar onChange={serachByNameChange} value={searchByName} />
        <FilterBar />
      </header>
      <main>
        <CharactersList characters={characters} />
      </main>
    </StyledContainer>
  );
};

export default CharacterPage;
const StyledContainer = styled(Container)(() => {
  return {
    padding: "1rem",
    background: "aliceblue",
  };
});
