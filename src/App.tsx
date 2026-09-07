import { lazy, Suspense } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

const Projects = lazy(() => import("./components/Projects/Projects"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Contact = lazy(() => import("./components/Contact/Contact"));

const App = () => {
  return (
    <>
      <Hero />
      <main>
        <Suspense fallback={null}>
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
