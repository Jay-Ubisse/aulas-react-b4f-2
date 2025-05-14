import { useEffect, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import type { CourseProps } from "../types/courses";
import { coursesData } from "../data/courses";

export const Courses = () => {
  const [refresh, setRefresh] = useState(0);
  const [courses, setCourses] = useState<CourseProps[]>([]);

  useEffect(() => {
    setCourses(coursesData);
  }, [refresh]);

  return (
    <>
      <Header />
      <main className="min-h-screen p-10">
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Procurar curso..."
              className="outline-1 outline-cyan-700 px-4 py-2 rounded-md"
            />
            <MagnifyingGlass className="text-cyan-700 -ml-8" size={24} />
          </div>
          <button
            className=" bg-cyan-700 hover:bg-cyan-600 cursor-pointer text-white px-4 py-2 rounded-md"
            onClick={() => setRefresh(refresh + 1)}
          >
            Actualizar lista
          </button>
        </div>
        <h1 className="text-cyan-700 text-3xl font-medium">Nossos cursos</h1>
        <section className="grid grid-cols-4 gap-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-lg p-5 my-5"
            >
              <h1>{course.title}</h1>
              <p>Nível: {course.level}</p>
              <p>Idioma: {course.language}</p>
              <p>Duração: {course.durationInHours}</p>
              <p
                className={`text-white w-fit rounded-md px-2 py-1 font-medium ${
                  course.isFree ? "bg-green-500" : "bg-yellow-500"
                }`}
              >
                {course.isFree ? "Gratuito" : "Pago"}
              </p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};
