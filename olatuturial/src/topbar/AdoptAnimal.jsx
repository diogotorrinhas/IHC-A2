import "./topbar.css";
import React from "react";

export default function AdoptAnimal() {

    return(

        <body>
      <header>
      <h1><a href="http://localhost:3000">calhau</a></h1>
        <nav>
          <ul class="nav_links">
            <li><a href="http://localhost:3000/AdoptAnimal">  Adopt Animal</a></li>
            <li><a href="http://localhost:3000/Donate">  Donate</a></li>
            <li><a href="http://localhost:3000/FoundAnimal">  Found Animal</a></li>
          </ul>
        </nav>
        <a class="cta" href="#"><button>Admin</button></a>
      </header>

      <div class="redesbaixo">
        <i className="redesidon fab fa-facebook-square"> facebook</i>
        <i className="redesidon fab fa-instagram-square"> instagram</i>
        <i className="redesidon fab fa-twitter-square"> twitter</i>
      
      </div>


    </body>
        
    );




}