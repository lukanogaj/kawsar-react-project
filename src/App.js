import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navabar";
import Hero from "./components/Hero";
import FloatingIcons from "./components/FloatingIcons";
function App() {
	return (
		<Layout>
			<Navbar />
			<Hero />
			<FloatingIcons />
		</Layout>
	);
}

export default App;
