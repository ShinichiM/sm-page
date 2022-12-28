import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Work } from "./pages/Work";

function App() {
  return (
    <section className="main-container">
      <Navbar />
      <About />
      <Contact />
      <Work />
    </section>
  );
}

export default App;
