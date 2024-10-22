import FontsHelmet from "./FontsHelmet";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "../theme/theme.tsx";
import { useTheme } from "../context/ThemeContext.tsx";

function App() {
  const { isDarkTheme } = useTheme();

  return (
    <HelmetProvider>
      <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
        <FontsHelmet />
        <GlobalStyle />
        <ToastContainer />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
