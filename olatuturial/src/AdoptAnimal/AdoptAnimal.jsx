import "./adoptAnimal.css";
import React from "react";

export default function AdoptAnimal() {

    return(
      
    <body>
      <header>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>                       
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

      <div class="redesbaixoAdoptAnimal">
        <i className="redesidon fab fa-facebook-square"> <a href="https://www.facebook.com/">facebook</a></i>
        <i className="redesidon fab fa-instagram-square"> <a href="https://www.instagram.com/">instagram</a></i>
        <i className="redesidon fab fa-twitter-square"> <a href="https://twitter.com/">twitter</a></i>
      
      </div>

        <bodydAdoptAnimal>
        <div class="containerAdoptAnimal">

            <div class="card">
                <div class="imgBx">

                    <img src="https://ireland.apollo.olxcdn.com/v1/files/8phc8l1rj6rh2-PT/image;s=564x846" class="cao"
                    alt=""/>
          <a href="http://localhost:3000/AdoptAnimal/DOGS"> <center><button class="btn1">DOGS</button></center> </a>

                </div>
            </div>

            <div class="card">
                <div class="imgBx">

                    <img src="https://i.pinimg.com/564x/04/b9/43/04b943a8b2b028b422d571ebbf1c3b4a.jpg" class="gato"
                    alt=""/>
                    <a href="http://localhost:3000/AdoptAnimal/CATS"><center><button class="btn1">CATS</button></center></a>

                </div>
            </div>

            

        </div>
        </bodydAdoptAnimal>
    </body>
    );

}
