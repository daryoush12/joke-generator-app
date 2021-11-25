import { useState, createContext, useContext, Provider } from "react";

const API_URI = process.env.JOKE_API;

export default function useJokes() {
  const [joke, setJoke] = useState();

  async function fetchJoke() {
    const result = await fetch(API_URI);
    if (result.ok) setJoke(await result.json());
  }

  return { joke, fetchJoke };
}

const jokeContext = createContext(useJokes);

export function JokeProvider({ children }) {
  return <jokeContext.Provider>{children}</jokeContext.Provider>;
}

export function useJokeProvider() {
  const jokeProvider = useContext(jokeContext);
  return { jokeProvider };
}
