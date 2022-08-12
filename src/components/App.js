import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/App.css";
import Greeting from "./Greeting";
import NotFound from "./NotFound";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Greeting />} />
				<Route path="/home" element={<Greeting />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
