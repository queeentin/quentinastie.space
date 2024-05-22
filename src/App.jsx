import { Home } from "./pages/Home.jsx";
import { AnimatedRoute } from "./AnimatedRoute.jsx";
import "./css/App.css";
import "./css/modes/morning.css";
import "./css/modes/afternoon.css";
import "./css/modes/evening.css";
import "./css/modes/night.css";
import "./css/modes/rainbow.css";

function App() {
  return (
    <>
      <Home />
      <AnimatedRoute />
    </>
  );
}

export default App;