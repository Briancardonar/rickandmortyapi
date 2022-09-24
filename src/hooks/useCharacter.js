import { doGet } from "../fetch";
import { useEffect, useState } from "react";

const API_URL = "https://rickandmortyapi.com/api/";

function useCharacter() {
  const [character, setCharacter] = useState({ name: "", image: "" });

  const randomNumber = () => {
    const number = Math.random();
    if (number === 0) {
      randomNumber();
    }
    return Math.floor(number * 100);
  };

  const [url, setUrl] = useState(() => {
    const id = randomNumber();

    return `${API_URL}/character/${id}`;
  });

  const getCharacter = () => {
    const id = randomNumber();
    const urlCharacter = `${API_URL}/character/${id}`;
    setUrl(urlCharacter);
  };

  useEffect(() => {
    const getCharacter = async () => {
      const character = await doGet(url);
      setCharacter({
        name: character.name ?? "",
        image: character.image ?? ""
      });
    };
    getCharacter();
  }, [url]);

  return {
    characterName: character.name,
    characterImage: character.image,
    getCharacter
  };
}

export default useCharacter;
