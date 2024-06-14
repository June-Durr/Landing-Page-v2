import { Employee } from "./components/Employee";
import { Navigation } from "./components/Navigation";
import { Service } from "./components/Service";
import { Slider } from "./components/Slider";
import { DesignDev } from './components/DesignDev';
import { Subscription } from './components/Subscription';
import { Membership } from "./components/Membership";
import { RecentWork } from "./components/RecentWork";
import { FAQ } from "./components/faq";

function App() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <Employee />
      <Slider />
      <Service />
      <DesignDev />
      <Subscription />
      <Membership />
      <RecentWork />
      <FAQ />
    </div>
  );
}

export default App;
