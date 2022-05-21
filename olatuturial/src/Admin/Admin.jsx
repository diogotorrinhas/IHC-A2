import React from "react";
import "./admin.css";

export default function FoundAnimal() {

	return (
		<body>

		<header>
      <h1><a href="http://localhost:3000"><button>WebApp</button></a></h1>
        <nav>
          <ul class="nav_links">
          </ul>
        </nav>
      </header>

		<bodyadmin>
			<div class="containeradmin">
				<form action=''>
						<h1><center>Login</center></h1>
					<div class='form-group'>
						<label for="">Email</label>
						<input type="text" class="form-control" required/>
					</div>
					<div class='form-group'>
						<label for="">Password</label>
						<input type="password" class="form-control" required />
					</div>
						<button class="btnadmin" href="http://localhost:3000/FoundAnimal">Login</button>
						{/* Carregar no botão de login e ir para a página, para testar, foundanimal mas não está a ir para a página não sei pq*/ }
				</form>
			</div>
		</bodyadmin>
		</body>
	);
}
