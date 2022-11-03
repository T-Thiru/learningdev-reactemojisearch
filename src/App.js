import "./App.css";
import Line from "./components/Line";
import Search from "./components/Search";
import emoji from "./emoji.json";

function App() {
  return (
    <>
      <header>
        <Search />
      </header>
      <main>
        <Line emoji={emoji} />
      </main>
      <footer>
        <p>Made at le Reacteur by Thiru - 2022</p>
      </footer>
    </>
  );
}

export default App;
