import "./dogs.css";
import React from "react";


export default function Dogs() {
  return (

    

    <body>
      <header>
      <h1><a href="http://localhost:3000"><button>WebApp</button></a></h1>
        <nav>
          <ul class="nav_links">
            <li><a href="http://localhost:3000/AdoptAnimal">  <hcorvermelha>Adopt Animal</hcorvermelha></a></li>
            <li><a href="http://localhost:3000/Donate">  Donate</a></li>
            <li><a href="http://localhost:3000/FoundAnimal">  Found Animal</a></li>
          </ul>
        </nav>
        <a class="cta" href="http://localhost:3000/Admin"><button>Admin</button></a>
      </header>

  

      <bodydDogs>
        <div class="containerDonate">

            <div class="card">
                <div class="imgBx">
                    <center><h3><b>If you are interested in finding an animal to adopt,  </b></h3></center>
                    <center><h3><b>you are in the right place.</b></h3></center>
                    <center><h3><b>Never forget an adoption has to be responsible!</b></h3></center>
                    <center><h3><b>If you are going to abandon him or treat him badly, don't adopt!</b></h3></center>
                </div>
            </div>


        </div>
        </bodydDogs>
        <bodydDogs>
        <div class= "containerdif">
          <a href="http://localhost:3000/AdoptAnimal/DOGS"><button class="btn-2">All</button></a>
          <a href="/AdoptAnimal/DOGS/until3years"><button class="btn-2">Até 3 anos</button></a>
          <a href="/AdoptAnimal/DOGS/short"><button class="btn-2">Porte Pequeno</button></a>
          <a href="/AdoptAnimal/DOGS/medium"><button class="btn-2">Porte Médio</button></a>
          <a href="/AdoptAnimal/DOGS/large"><button class="btn-2">Porte Grande</button></a>
          <a href="/AdoptAnimal/DOGS/male"><button class="btn-2">Macho</button></a>
          <a href="/AdoptAnimal/DOGS/female"><button class="btn-2">Fêmea</button></a>
        </div>
        </bodydDogs>

        <section class="containerAnimalBox">
          <div class="cardAnimalBox">
            <div class="cardAnimalBox-image card-1"></div>
              <h2>Kiko</h2>
              <p><b>Name:</b> Kiko</p>
              <p><b>Sex:</b> Male</p>
              <p><b>Age:</b> 4 Weeks</p>
              <p><b>Size:</b> Medium</p>
            <a href="http://localhost:3000/AdoptAnimal/DOGS/Dog1"><h3>More Informations</h3></a>
          </div>
          <div class="cardAnimalBox">
            <div class="cardAnimalBox-image card-2"></div>
              <h2>Luna</h2>
              <p><b>Name:</b> Luna</p>
              <p><b>Sex:</b> Female</p>
              <p><b>Age:</b> 2 Years</p>
              <p><b>Size:</b> Large</p>
              <a href="http://localhost:3000/AdoptAnimal/DOGS/Dog2"><h3>More Informations</h3></a>
          </div>
          <div class="cardAnimalBox">
            <div class="cardAnimalBox-image card-3"></div>
              <h2>Nico</h2>
              <p><b>Name:</b> Nico</p>
              <p><b>Sex:</b> Male</p>
              <p><b>Age:</b> 5 Years</p>
              <p><b>Size:</b> Large</p>
              <a href="http://localhost:3000/AdoptAnimal/DOGS/Dog3"><h3>More Informations</h3></a>
          </div>
          <div class="cardAnimalBox">
            <div class="cardAnimalBox-image card-4"></div>
              <h2>Benji</h2>
              <p><b>Name:</b> Benji</p>
              <p><b>Sex:</b> Male</p>
              <p><b>Age:</b> 2 Years</p>
              <p><b>Size:</b> Short</p>
              <a href="http://localhost:3000/AdoptAnimal/DOGS/Dog4"><h3>More Informations</h3></a>
          </div>
          <div class="cardAnimalBox">
            <div class="cardAnimalBox-image card-5"></div>
              <h2>Lana</h2>
              <p><b>Name:</b> Lana</p>
              <p><b>Sex:</b> Female</p>
              <p><b>Age:</b> 7 Years</p>
              <p><b>Size:</b> Medium</p>
              <a href="http://localhost:3000/AdoptAnimal/DOGS/Dog5"><h3>More Informations</h3></a>
          </div>
          <div class="cardAnimalBox">
            <div class="cardAnimalBox-image card-6"></div>
              <h2>Nancy</h2>
              <p><b>Name:</b>Nancy </p>
              <p><b>Sex:</b> Female</p>
              <p><b>Age:</b> 7 Weeks</p>
              <p><b>Size:</b> Short</p>
              <a href="http://localhost:3000/AdoptAnimal/DOGS/Dog6"><h3>More Informations</h3></a>
          </div>
        </section>
    </body>
  );
}