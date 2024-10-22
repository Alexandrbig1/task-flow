import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import {
  HiddenIcon,
  MoonIcon,
  SunIcon,
  ThemeSwitcherBtn,
} from "./ThemeSwitcher.styled";

const ThemeSwitcher = React.memo(() => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <ThemeSwitcherBtn
      type="button"
      aria-label="Toggle Theme"
      title="Toggle Theme"
      onClick={toggleTheme}
    >
      {isDarkTheme ? <SunIcon /> : <MoonIcon />}
      <HiddenIcon>
        {isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
      </HiddenIcon>
    </ThemeSwitcherBtn>
  );
});

ThemeSwitcher.displayName = "ThemeSwitcher";

export default ThemeSwitcher;
