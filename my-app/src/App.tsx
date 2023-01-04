import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavbarComponent } from "./components/NavbarComponent";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <section className="main-container overflow-auto">
      <>
        <NavbarComponent />
        <div className="desktop-style">
          <About />
          <Contact />
          <Projects />
        </div>
      </>
      {/* {window.innerWidth < 1025 ? (
        <>
          <NavbarComponent />
          <About />
          <Contact />
          <Projects />
        </>
      ) : (
      )} */}
    </section>
  );
}

export default App;
