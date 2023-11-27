import "./App.css";
import Projects from "./components/projects/project/Projects";

function App() {
  return (
    <div className="App">
      <h1>Organizer</h1>
      <main>
        <section>
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default App;
