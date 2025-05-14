import { useEffect, useState } from "react";

export const Courses = () => {
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    console.log("Lista de cursos atualizada");
  }, [refresh]);

  return (
    <>
      <button onClick={() => setRefresh(refresh + 1)}>Actualizar lista</button>
      <h1>Nossos cursos</h1>
    </>
  );
};
