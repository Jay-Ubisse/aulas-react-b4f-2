import { useState } from "react";

export const Header = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  return (
    <header className="bg-gradient-to-r from-cyan-500 to-cyan-900 px-20 py-10 text-white flex justify-between">
      <h1 className="text-extraGG font-bold text-cinha-200">
        B4F TechZone{" "}
        <span className="text-2xl font-medium">
          {isUserAuthenticated ? "| Coronel Ubisse" : ""}
        </span>
      </h1>
      <button
        className="bg-white rounded-md text-cyan-600 px-4 py-2 font-medium"
        onClick={() => setIsUserAuthenticated(!isUserAuthenticated)}
      >
        {isUserAuthenticated ? "Terminar Sessão" : "Iniciar Sessão"}
      </button>
    </header>
  );
};
