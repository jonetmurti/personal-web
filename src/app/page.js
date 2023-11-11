import Home from "@/components/home/Home";
import Projects from "@/components/project/Projects";
import Contact from "@/components/contact/Contact";

const Main = () => {
  return (
    <div className="bg-light dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto">
        <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
          <Home />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Main;
