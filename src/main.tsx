import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Tester account:
// tester3@hackathon2024.com
// `https://staff.brewcode2024.ekspawn.com / uz2CduQcNKIV`

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
