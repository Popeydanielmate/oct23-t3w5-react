import logo from './logo.svg';
import './App.css';

import Navbar from './navbar';

let favouriteMovies = [
  "Aliens",
  "Dune",
  "Hot Fuzz",
  "Anchorman",
  "Lock stock and 2 smoking barrels",
  "Shrek",
  "Pokemon",
  "Blazing Saddles",
  "Snatch",
  "Shrek 2",
  "The good, the bad and the ugly",
  "Robocop",
  "Bladerunner",
  "Lord of the rings 1-3"
];

function App() {
  return (
    <div className="App">

      <Navbar />
      <header className="App-header">
        <h1>Hello World!</h1>
        <h1>Favourite movies:</h1>
        <ul>{favouriteMovies.map((movie, index) => {
          return <li key={movie + "-" + index}>{movie}</li>
        })}</ul>
      </header>
    </div>
  );
}

export default App;
