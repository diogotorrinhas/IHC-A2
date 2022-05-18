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


      <center><h2>Bem vindo</h2></center>

    <bodyd>
      <div class="container">
					
			<div class="card">
				<div class="imgBx">
					
					<img src="https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-me-pet-02032021.jpg"/>
          <p>Dragon fruit aka pitaya, pitahaya or 
					strawberry pear, is high in nutrients, fiber and 
					antioxidants. This superfood smoothie is creamy.
					</p>
					
				</div>
			</div>
		
			<div class="card">
				<div class="imgBx">
					
					<img src="https://static.vecteezy.com/system/resources/previews/001/843/828/non_2x/donate-money-for-charity-design-illustration-isolated-on-white-background-free-vector.jpg"/>
					<p>Dragon fruit aka pitaya, pitahaya or 
					strawberry pear, is high in nutrients, fiber and 
					antioxidants. This superfood smoothie is creamy.
					</p>

				</div>	
			</div>	
			
			<div class="card">
				<div class="imgBx">
					
					<img src="https://thumbs.dreamstime.com/b/boston-terrier-puppy-holding-adopt-me-sign-cute-seven-week-old-standing-cardboard-says-please-rescue-54649223.jpg"/>
					<p>Dragon fruit aka pitaya, pitahaya or 
					strawberry pear, is high in nutrients, fiber and 
					antioxidants. This superfood smoothie is creamy.
					</p>
				</div>	
			</div>	
			
		</div>	
    </bodyd>

    </body>
        
    );




}