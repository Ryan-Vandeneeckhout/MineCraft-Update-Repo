import "./App.scss";
import MainContent from "./components/replaceDataComponents/MainContent";
import "./sass/style.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes, faAngleUp, faPlay, faHandshakeAlt, faMobileAlt, faUniversalAccess, faPause, faAngleDown, faMusic, faEye, faDownload, faBuildingColumns, faArrowRightFromBracket, faDatabase, faBug, faExchange, faUpload} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import SideMenu from "./components/navComponents/SideMenu";
import DevMenu from "./components/navComponents/DevMenu";

library.add( fab, faBars, faAngleUp, faHandshakeAlt, faMobileAlt, faUniversalAccess, faPause, faPlay, faTimes, faExchange, faDownload, faEye, faAngleDown, faMusic, faBuildingColumns, faArrowRightFromBracket, faDatabase, faBug, faUpload);

function App() {
  const [mobileNav, setMobileNav] = useState(false); 
  const MobileNavFunction = () => { 
    setMobileNav(mobileNav => !mobileNav);
  }
  return (
    <div className="App">
      <div className="sidemenu-Account">
      </div>
      <div className="wrapper-main-Content">
        <header className="App-header">
          <h1>Block State Conversion: Version 1.2 </h1>
          <DevMenu setMobileNav={setMobileNav} MobileNavFunction={MobileNavFunction} mobileNav={mobileNav} />
        </header>
        <MainContent />
        <SideMenu mobileNav={mobileNav}/>
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
