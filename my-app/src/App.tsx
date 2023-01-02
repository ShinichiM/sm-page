import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <section className="main-container overflow-auto">
      <Navbar />
      <About />
      <Contact />
      <Projects />
    </section>
  );
}

export default App;
