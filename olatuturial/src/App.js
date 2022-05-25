import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdoptAnimal from "./AdoptAnimal/AdoptAnimal";
import Donate from "./Donate/Donate";
import FoundAnimal from "./FoundAnimal/FoundAnimal";
import Topbar from "./topbar/TopBar";
import Admin from "./Admin/Admin";
import Validate from "./Validate/Validate";
import Dogs from "./Dogs/Dogs"
import Dog1 from "./Components/Slider/Dog1"
import Dog2 from "./Components/Slider/Dog2"
import Dog3 from "./Components/Slider/Dog3"
import Dog4 from "./Components/Slider/Dog4"
import Dog5 from "./Components/Slider/Dog5"
import Dog6 from "./Components/Slider/Dog6"


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
					<Route path="/Validate" element={ <Validate /> } />
					<Route path="/AdoptAnimal/DOGS" element={ <Dogs /> } />
					<Route path="/AdoptAnimal/DOGS/Dog1" element={ <Dog1 /> } />
					<Route path="/AdoptAnimal/DOGS/Dog2" element={ <Dog2 /> } />
					<Route path="/AdoptAnimal/DOGS/Dog3" element={ <Dog3 /> } />
					<Route path="/AdoptAnimal/DOGS/Dog4" element={ <Dog4 /> } />
					<Route path="/AdoptAnimal/DOGS/Dog5" element={ <Dog5 /> } />
					<Route path="/AdoptAnimal/DOGS/Dog6" element={ <Dog6 /> } />
				</Routes>
			</Router>

		</>
	);
}

export default App;
