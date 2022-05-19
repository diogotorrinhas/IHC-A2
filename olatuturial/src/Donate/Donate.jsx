import "./donate.css";
import React from "react";

export default function Donate() {

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

        <bodydDonate>
        <div class="containerDonate">

            <div class="card">
                <div class="imgBx">
                    <center><h3>Welcome to the Donation Page!</h3></center>
                    <center><h3>Help The Animals!</h3></center>
                    <center><h3>All the money will be used only for Animal Care!</h3></center>
                    <center><h3>You can donate by the methods shown below!</h3></center>
                </div>
            </div>


        </div>
        </bodydDonate>

        <bodydDonate>
        <div class="containerDonate2">

            <div class="card">
                <div class="imgBx">
                <img src="https://static.vecteezy.com/ti/vetor-gratis/t2/4974857-donation-for-pets-flat-design-long-shadow-glyph-icon-animals-bem-estar-coracao-com-gato-e-cachorro-focinho-dentro-de-silhueta-ilustracao-vetor.jpg" class="cao"
                    alt=""/>
                </div>
            </div>


        </div>
        </bodydDonate>



        </body>

    );
}