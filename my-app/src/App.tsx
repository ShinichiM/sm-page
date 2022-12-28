import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Project } from "./pages/Project";

function App() {
  return (
    <section className="main-container">
      <Navbar />
      <About />
      <Contact />
      <Project />
    </section>
  );
}

export default App;
