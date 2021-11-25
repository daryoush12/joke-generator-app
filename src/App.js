import logo from "./logo.svg";
import "./App.css";
import { useJokeProvider } from "./Hooks/jokes";

function App() {
  const { joke, fetchJoke } = useJokeProvider();

  const generateButtonClick = (e) => {
    e.preventDefault();
    fetchJoke();
  };

  return (
    <div className="App">
      <p>{joke?.setup}</p>

      <button onClick={generateButtonClick}>Generate</button>
    </div>
  );
}

export default App;
