import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavbarComponent } from "./components/NavbarComponent";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";

function App() {
  return (
    <section className="main-container overflow-auto">
      <>
        <NavbarComponent />
        <div className="desktop-style background-img">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </>
    </section>
  );
}

export default App;
