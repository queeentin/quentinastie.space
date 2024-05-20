import { Home } from "./pages/Home.jsx";
import { AnimatedRoute } from "./AnimatedRoute.jsx";
import "./css/App.css";
import "./css/modes/morning.css";
import "./css/modes/afternoon.css";
import "./css/modes/evening.css";
import "./css/modes/night.css";
import "./css/modes/rainbow.css";
import { Footer } from "./components/Footer.jsx";
import { Icon } from "./components/Icon.jsx";

function App() {
  return (
    <>
      <Icon />
      <Home />
      <Footer />
      <AnimatedRoute />
    </>
  );
}

export default App;