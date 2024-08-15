import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary📎</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/beattrizgarcia"
            target="_blank"
            rel="noreferrer"
          >
            Beatriz Garcia
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/beattrizgarcia/react-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub{" "}
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dashing-khapse-4905bd.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
