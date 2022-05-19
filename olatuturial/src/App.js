import Topbar from "./topbar/TopBar";
import AdoptAnimal from "./AdoptAnimal/AdoptAnimal";
import Donate from "./Donate/Donate";
import FoundAnimal from "./FoundAnimal/FoundAnimal";

import React , { usestate } from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App(){

    return(
        <>
            

            <Router>
                <Routes>
                    <Route path="/" element={<Topbar />} />
                    <Route path="/AdoptAnimal" element={<AdoptAnimal />} />
                    <Route path="/Donate" element={<Donate />} />
                    <Route path="/FoundAnimal" element={<FoundAnimal />} />
                </Routes>
            </Router>   
           
        </>
    );
}

export default App;