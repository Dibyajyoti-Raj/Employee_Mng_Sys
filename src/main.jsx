import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";



// localStorage.clear()
// run this once to clear all local storege date. can check in 'inspect->Application->Local storage'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </StrictMode>
);
