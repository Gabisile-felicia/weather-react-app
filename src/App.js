import React from "react";
import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Mbombela" />
        <small>
          Check this project's{" "}
          <a
            href="https://github.com/Gabisile-felicia/weather-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repository
          </a>{" "}
        </small>
      </header>
    </div>
  );
}

export default App;
