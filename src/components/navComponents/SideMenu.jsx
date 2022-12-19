import { useState } from "react";
import "./SideMenu.scss";
import SideMenuMainMenu from "./SideMenuMainMenu";
import ThemeMenuChanger from "../side menu components/ThemeMenuChanger";

const SideMenu = (props) => {
  const [mainMenushow, setMainMenu] = useState(true);
  const [themeMenuState, setThemeMenu] = useState(false);
  const [musicMenuState, setMusicMenu] = useState(false);

  return (
    <section
      className={`sideMenu${
        props.mobileNav ? " smoothClosed" : " smoothShown"
      }`}
    >
      <ul className={`mainMenu${mainMenushow ? " opened" : " closed"}`}>
        <SideMenuMainMenu
          setMainMenu={setMainMenu}
          setThemeMenu={setThemeMenu}
          setMusicMenu={setMusicMenu}
          musicMenuState={musicMenuState}
        />
      </ul>

      <ul className={`mainMenu${mainMenushow ? " closed" : " opened"}`}>
        <button
          onClick={() => {
            setMainMenu(true);
            setThemeMenu(false);
            setMusicMenu(false);
          }}
        >
          Main Menu
        </button>
        {themeMenuState && <ThemeMenuChanger themeMenuState={themeMenuState} />}
      </ul>
    </section>
  );
};
export default SideMenu;
