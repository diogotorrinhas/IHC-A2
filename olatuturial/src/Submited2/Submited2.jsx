import React from "react";
import { useLocation, Link } from 'react-router-dom';
import "./submited2.css";

export default function Submited2() {
	const location = useLocation();
	const state = location.state;
	console.log(state);

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

			<bodySubmited2>
				<div class="containerSubmited2">
					<div class="card">
						<div class="imgBx">
							<center><h3>Form submitted successfully!</h3></center>
							<center><h3>Animal's form has been successfully submitted!</h3></center>
						</div>
					</div>
				</div>
			</bodySubmited2>

			<fieldsetSubmited22>
				<form>
					<fieldsetSubmited class="grupoSubmitedAnimal">
						<div class="campoSubmitedAnimal">
							<label ><strong>Animal: </strong></label> {state.Animal}

						</div>

						<div class="campoSubmitedAnimal">
							<label ><strong>Breed: </strong></label> { state.Breed }
						</div>

						<div class="campoSubmitedAnimal">
							<label ><strong>State of the animal: </strong></label> { state.StateAnimal }
						</div>

						<div class="campoSubmitedAnimal">
							<label ><strong>Sex: </strong></label> { state.AnimalSex }
						</div>

						<div class="campoSubmitedAnimal">
							<label ><strong>Intends to deliver the animal to the institution?: </strong></label> { state.Institution }
						</div>

						<div class="campoSubmitedAnimal">
							<label ><strong>More information: </strong></label> { state.MoreInfoAnimal }
						</div>
					</fieldsetSubmited>

					<a href="http://localhost:3000"><button class="botaoSubmited" type="button">Done</button></a>

				</form>
			</fieldsetSubmited22>

		</body>

	);


}
