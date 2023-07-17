import "./App.css";
import Nav from "./components/Nav/nav.component";
import CounterSection from "./components/counterSection/counter-section.component";
import HeroSection from "./components/heroSection/hero-section.component";

function App() {
    return (
        <>
            <Nav />
            <HeroSection />
            <CounterSection />
        </>
    );
}

export default App;
