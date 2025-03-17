import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navabar";
import Hero from "./components/Hero";
import SliderLogos from "./components/Slider";
import Division from "./components/Division";
function App() {
	return (
		<Layout>
			<Navbar />
			<Hero />
			<SliderLogos />
			<Division />
		</Layout>
	);
}

export default App;
