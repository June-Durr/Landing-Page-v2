import "./App.css";
import { Employee } from "./components/Employee";
import { Navigation } from "./components/Navigation";
import { Service } from "./components/Service";
import { Slider } from "./components/Slider";

function App() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <Employee />
      <Slider />
      <Service />
    </div>
  );
}

export default App;
