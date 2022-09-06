import "./style.css";
import React, { useContext, useState } from "react";
import classnames from "classnames";

const ThemeContext = React.createContext(null);

// class Theme extends React.Component {
//   render() {
//     return (
//       <ThemeContext.Provider value={{ color: "dark" }}>
//         <Content />
//       </ThemeContext.Provider>
//     );
//   }
// }

// function Content() {
//   return (
//     <ThemeContext.Consumer>
//       {(context) => <div>{context.color}</div>}
//     </ThemeContext.Consumer>
//   );
// }

function Theme() {
  const [color, setColor] = useState("light");

  function toggleTheme() {
    const prevColor = color === "light" ? "dark" : "light";
    setColor(prevColor);
  }

  return (
    <ThemeContext.Provider value={{ color, toggleTheme }}>
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <Panel title="welcome">
      <p>
        <strong>The Mid-Autumn Festival</strong>,also known as the Moon Festival
        or Mooncake Festival, is a traditional festival celebrated in Chinese
        culture. Similar holidays are celebrated in Japan,Korea,Vietnam, and
        other countries in East and Southeast Asia. It is one of the most
        important holidays in Chinese culture. Its popularity is on par with
        that of Chinese New Year. The history of the Mid-Autumn Festival dates
        back over 3,000 years.The festival is held on the 15th day of the 8th
        month of the Chinese lunisolar calendar with a full moon at night,
        corresponding to mid-September to early October of the Gregorian
        calendar.On this day, the Chinese believe that the Moon is at its
        brightest and fullest size, coinciding with harvest time in the middle
        of Autumn.
      </p>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const themeCls = classnames("panel", theme.color);
  const iconCls = classnames("icon", theme.color);

  return (
    <div className={themeCls}>
      <div className="header">
        <h2>{title}</h2>
        <div className={iconCls} onClick={() => theme.toggleTheme()}></div>
      </div>
      {children}
    </div>
  );
}

export default Theme;
