import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

export default function Cat6() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

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
      <bodydDonate>
        <div class="containerDonate">

            <div class="card">
                <div class="imgBx">
                    <center><h3><b>Hi, I'm Jonas!</b></h3></center>
                    <center><h3><b>Below are my photos and information!</b></h3></center>
                    <center><h3><b>If you want to adopt me, contact my Holder!</b></h3></center>
                    <center><h3><b>Please, Adopt Me! :(</b></h3></center>
                </div>
            </div>


        </div>
        </bodydDonate>
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/ImgsCat6/img${index + 1}.jpg`} 
                        />
                    </div>
                )
            })}

            
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
        
        
        <bodydSlider>
        <div class="containerSlider">

            <div class="card">
                <div class="imgBx">
                    <center><h3><b>Name:</b>&nbsp;Jonas</h3></center>
                    <center><h3><b>Breed:</b>&nbsp;None</h3></center>
                    <center><h3><b>Sex:</b>&nbsp;Male</h3></center>
                    <center><h3><b>Age:</b>&nbsp;7 Weeks</h3></center>
                    <center><h3><b>Coat type:</b>&nbsp;Long</h3></center>
                    <center><h3><b>Vaccines:</b></h3></center>
                    <center><h3>Vaccinated and Sterilized</h3></center>
                    <center><h3><b>More Information:</b></h3></center>
                    <center><h3>Loves to Sleep, Loves to play with a ball, Don't like to wear a collar</h3></center>
                </div>
            </div>

            <div class="cardHolder">
                <center><h3><b>Holder:</b>Institution</h3></center>
                <div class="imgBxHolder">
                    <img src="https://img2.gratispng.com/20180509/klq/kisspng-person-logo-computer-icons-5af2c2026fcf79.460327751525858818458.jpg" class="gato"
                    alt=""/>
                </div>
                <div class="textHolder">
                    <center><h3><b>Email:</b></h3></center>
                    <center><h3>animalsInstit@gmail.com</h3></center>
                    <center><h3><b>Nº Telefone:</b>&nbsp;924759488</h3>
                    </center><center><h3><b>Morada:</b></h3></center>
                    <center><h3>Ornimundo, R. Dom Manuel Barbuda e Vasconcelos 18.2, 3810-498 Aveiro</h3></center>
                </div>
            </div>


        </div>
        </bodydSlider>
    </body>
    )
}