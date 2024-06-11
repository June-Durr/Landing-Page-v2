import "./App.css";
import { Employee } from "./components/Employee";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Employee />
    </div>
  );
}

export default App;
