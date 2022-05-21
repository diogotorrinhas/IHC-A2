import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdoptAnimal from "./AdoptAnimal/AdoptAnimal";
import Donate from "./Donate/Donate";
import FoundAnimal from "./FoundAnimal/FoundAnimal";
import Topbar from "./topbar/TopBar";
import Admin from "./Admin/Admin";



function App() {

	return (
		<>


			<Router>
				<Routes>
					<Route path="/" element={ <Topbar /> } />
					<Route path="/AdoptAnimal" element={ <AdoptAnimal /> } />
					<Route path="/Donate" element={ <Donate /> } />
					<Route path="/FoundAnimal" element={ <FoundAnimal /> } />
					<Route path="/Admin" element={ <Admin /> } />
				</Routes>
			</Router>

		</>
	);
}

export default App;
