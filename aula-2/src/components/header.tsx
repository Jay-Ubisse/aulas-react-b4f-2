import { useState } from "react";

export const Header = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  return (
    <header>
      <h1>B4F TechZone {isUserAuthenticated ? "| Coronel Ubisse" : ""}</h1>
      <button onClick={() => setIsUserAuthenticated(!isUserAuthenticated)}>
        {isUserAuthenticated ? "Terminar Sessão" : "Iniciar Sessão"}
      </button>
      <hr />
    </header>
  );
};
