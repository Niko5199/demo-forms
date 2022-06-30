import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ExampleRefs } from "./components/ExampleRefs";

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <App></App>
    <ExampleRefs></ExampleRefs>
  </StrictMode>
);
