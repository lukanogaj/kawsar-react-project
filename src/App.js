import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navabar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Division from "./components/Division";
import Section from "./components/Section";
function App() {
	return (
		<Layout>
			<Navbar />
			<Hero />
			<Slider />
			<Division />
			<Section />
		</Layout>
	);
}

export default App;
