import "./App.scss";
import MainContent from "./components/replaceDataComponents/MainContent";
import "./sass/style.scss";

function App() {
  return (
    <div className="App">
      <div className="sidemenu-Account">
      </div>
      <div className="wrapper-main-Content">
        <header className="App-header">
          <h1>Block State Conversion: Version 1.2 </h1>
        </header>
        <MainContent/>
      </div>
      <footer>
        <div className="wrapper-footer">
          <p className="credits">Created by Kitty Shizz &copy;</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
