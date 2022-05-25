import "./foundAnimal.css";
import React from "react";

export default function FoundAnimal() {

    return(
        <body>
        <header>
        <h1><a href="http://localhost:3000"><button>WebApp</button></a></h1>
          <nav>
            <ul class="nav_links">
              <li><a href="http://localhost:3000/AdoptAnimal">  Adopt Animal</a></li>
              <li><a href="http://localhost:3000/Donate">  Donate</a></li>
              <li><a href="http://localhost:3000/FoundAnimal">  <b>Found Animal</b></a></li>
            </ul>
          </nav>
          <a class="cta" href="http://localhost:3000/Admin"><button>Admin</button></a>
        </header>

        

        </body>

    );
}