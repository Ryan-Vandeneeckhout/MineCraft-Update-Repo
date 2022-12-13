import { ThemeMenuButtonMap } from "./ThemeMenuButtonMap.jsx";

const ThemeMenuChanger = () => {
  let htmlElement = document.documentElement;

  return (
    <ul className="themeMenu">
      {ThemeMenuButtonMap.map((item, index) => {
        return (
          <>
            <button
              key={index}
              aria-label={item.ButtonText}
              onClick={() =>
                htmlElement.setAttribute("data-theme", item.ThemeHTML)
              }
              style={{ background: item.ButtonColor }}
            >
              {item.ButtonText}
            </button>
          </>
        );
      })}
    </ul>
  );
};

export default ThemeMenuChanger;
