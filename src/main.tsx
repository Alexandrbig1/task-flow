import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import { ThemeContext } from "./context/ThemeContext.tsx";
import { TodoContext } from "./context/TodoContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContext>
      <TodoContext>
        <App />
      </TodoContext>
    </ThemeContext>
  </StrictMode>
);
