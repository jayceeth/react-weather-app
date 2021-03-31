import './App.css';
import Weather from "./Weather";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className = "container">
          <Weather />
          <SearchEngine />
       </div>
    </div>
  );
}

export default App;
