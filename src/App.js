import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <small>
          Check this project's{" "}
          <a href="https://github.com/Gabisile-felicia/weather-react-app">
            Github Repository
          </a>{" "}
        </small>
      </header>
    </div>
  );
}

export default App;
