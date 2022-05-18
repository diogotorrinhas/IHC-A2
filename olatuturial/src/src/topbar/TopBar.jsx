import "./topbar.css";
import React from "react";
import {useHistory} from "react-router-dom";



export default function Topbar() {
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
        <a class="cta" href="#"><button>Admin</button></a>
      </header>

      <div class="redesbaixoHomePage">
        <i className="redesidon fab fa-facebook-square"> <a href="https://www.facebook.com/">facebook</a></i>
        <i className="redesidon fab fa-instagram-square"> <a href="https://www.instagram.com/">instagram</a></i>
        <i className="redesidon fab fa-twitter-square"> <a href="https://twitter.com/">twitter</a></i>
      
      </div>


      <center><h2>Bem vindo</h2></center>

    <bodyHomePage>
      <div class="containerHomePage">
					
			<div class="card">
				<div class="imgBx">
					
					<img src="https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-me-pet-02032021.jpg"
					alt=""/>
          <p><center>Adotar animal</center>
					</p>
					
				</div>
			</div>
		
			<div class="card">
				<div class="imgBx">
					
					<img src="https://static.vecteezy.com/system/resources/previews/001/843/828/non_2x/donate-money-for-charity-design-illustration-isolated-on-white-background-free-vector.jpg"
					alt=""/>
					<p><center>Doar</center>
					</p>

				</div>	
			</div>	
			
			<div class="card">
				<div class="imgBx">
					
					<img src="https://thumbs.dreamstime.com/b/boston-terrier-puppy-holding-adopt-me-sign-cute-seven-week-old-standing-cardboard-says-please-rescue-54649223.jpg"
					alt=""/>
					<p><center>Ajudar</center>
					</p>
				</div>	
			</div>	
			
		</div>	
    </bodyHomePage>

    </body>
  );
}