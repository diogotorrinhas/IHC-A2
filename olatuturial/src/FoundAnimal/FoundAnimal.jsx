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
              <li><a href="http://localhost:3000/FoundAnimal">  Found Animal</a></li>
            </ul>
          </nav>
          <a class="cta" href="#"><button>Admin</button></a>
        </header>

        

        </body>

    );
}