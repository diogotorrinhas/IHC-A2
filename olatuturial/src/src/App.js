import Topbar from "./topbar/TopBar";
import AdoptAnimal from "./AdoptAnimal/AdoptAnimal";


import React , { usestate } from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App(){

    return(
        <>
            

            <Router>
                <Routes>
                    <Route path="/" element={<Topbar />} />
                    <Route path="/AdoptAnimal" element={<AdoptAnimal />} />
                </Routes>
            </Router>   
           
        </>
    );
}

export default App;