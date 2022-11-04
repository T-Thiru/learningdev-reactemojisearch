import "./App.css";
import Line from "./components/Line";
import Search from "./components/Search";
import emoji from "./emoji.json";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(emoji);

  return (
    <>
      <header>
        <Search
          emoji={emoji}
          value={value}
          setValue={setValue}
          result={result}
          setResult={setResult}
        />
      </header>
      <main>
        <Line
          emoji={emoji}
          value={value}
          setValue={setValue}
          result={result}
          setResult={setResult}
        />
      </main>
      <footer>
        <p>Made at le Reacteur by Thiru - 2022</p>
      </footer>
    </>
  );
}

export default App;
