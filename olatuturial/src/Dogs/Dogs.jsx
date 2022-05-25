import "./dogs.css";
import React from "react";


export default function Dogs() {
  return (

    

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
        <a class="cta" href="http://localhost:3000/Admin"><button>Admin</button></a>
      </header>

      <div class="redesbaixoHomePage">
        <i className="redesidonHomePage fab fa-facebook"> <a href="https://www.facebook.com/">facebook</a></i>
        <i className="redesidonHomePage fab fa-instagram"> <a href="https://www.instagram.com/">instagram</a></i>
        <i className="redesidonHomePage fab fa-twitter"> <a href="https://twitter.com/">twitter</a></i>
        <i className="redesidonAdoptAnimal"> <a href="">+351 924759488</a></i>
      
      </div>

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
          <button class="btn-2">All</button>
          <button class="btn-2">Até 3 anos</button>
          <button class="btn-2">Porte Pequeno</button>
          <button class="btn-2">Porte Médio</button>
          <button class="btn-2">Porte Grande</button>
          <button class="btn-2">Macho</button>
          <button class="btn-2">Fêmea</button>
        </div>
        </bodydDogs>
    </body>
  );
}