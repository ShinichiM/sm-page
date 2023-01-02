import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavbarComponent } from "./components/NavbarComponent";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <section className="main-container overflow-auto">
      <NavbarComponent />
      <About />
      <Contact />
      <Projects />
    </section>
  );
}

export default App;
