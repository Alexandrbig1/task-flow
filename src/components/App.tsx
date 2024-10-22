import FontsHelmet from "./FontsHelmet";
import { GlobalStyle } from "./GlobalStyle";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <HelmetProvider>
      <FontsHelmet />
      <GlobalStyle />
      <ToastContainer />
    </HelmetProvider>
  );
}

export default App;
