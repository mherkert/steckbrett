import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-ay0wof11rdljrkqm.eu.auth0.com"
      clientId="oemrAM6JjLiBwepz1ijWxp6QIcSHtvde"
      authorizationParams={{
        redirect_uri: "https://www.steckbrett.org/callback",
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
