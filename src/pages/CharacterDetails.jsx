import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { charactersId } = useParams();
  console.log("characterId", charactersId);
  const navigate = useNavigate();

  const [oneCharacter, setOneCharacter] = useState({});

  const getOneCharacters = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/" + charactersId
      );
      const data = await response.json();
      setOneCharacter(data);
    } catch (error) {}
  };
  useEffect(() => {
    getOneCharacters();
  }, []);
  const navigateHandler = () => {
    navigate("/characters");
  };

  return (
    <div>
      <div>
        <Button variant="contained" onClick={navigateHandler}>
          home page
        </Button>
        <h1>{oneCharacter.name}</h1>
        <img src={oneCharacter.image} alt={oneCharacter.name} />
        <h2>
          {oneCharacter.status} || {oneCharacter.gender}
        </h2>
      </div>
      {oneCharacter?.episode?.map((item) => (
        <p key={item.id}>{item}</p>
      ))}
    </div>
  );
};

export default CharacterDetails;
