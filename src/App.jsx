
import foto from "/foto.png"
import './App.css'
import { useState , useEffect } from "react"
import { useRef } from "react"
import champan from "/champan.svg"
import foto1 from "/1.jpg"
import foto2 from "/2.jpg"
import foto3 from "/3.jpg"
import foto4 from "/4.jpg"
import foto5 from "/5.jpg"
import foto6 from "/6.jpg"
import foto7 from "/7.jpg"
import foto8 from "/8.jpg"

function App() {
  const [timerDays , setTimerDays] = useState("00");
  const [timerHours , setTimerHours] = useState("00");
  const [timerMinutes , setTimerMinutes] = useState("00");
  const [timerSeconds , setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
      const countDownDate = new Date("Jan 24 2024 21:00:00 GMT-0300").getTime();

      interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
      const minutes = Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60 ))
      const seconds = Math.floor(distance % (1000 * 60  ) / 1000) 

      if ( distance < 0 ) {
        clearInterval(interval.current)
      } else {

        setTimerDays(days),
        setTimerHours(hours),
        setTimerMinutes(minutes),
        setTimerSeconds(seconds)
      }

    }, 1000 );
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  } , )


  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center colFoto"> 
          <img src={foto} alt="" className="foto"/>
          </div>
        </div>
        {/* CONTADOR */}
        <div className="row ">
          <div className="col-md-12 col-sm-12 text-center contador pt-3"> CUENTA REGRESIVO</div>
          <div className="col-md-12 col-sm-12 text-center timer-container pt-3 ">
            <section className="section">
              <p>{timerDays}</p>
              <span className="reloj"><small>Dias</small></span>
            </section>
            <span>:</span>
            <section className="section">
              <p>{timerHours}</p>
              <span className="reloj" ><small>Hs</small></span>
            </section>
            <span>:</span>
            <section className="section">
              <p>{timerMinutes}</p>
              <span className="reloj" ><small>Min</small></span>
            </section>
            <span>:</span>
            <section className="section">
              <p>{timerSeconds}</p>
              <span className="reloj"><small>Seg</small></span>
            </section>
          </div>
        </div>
      </div>
      {/* LUGAR DE LA FIESTA */}
      <div className="row text-center">
        <div className="col-sm-6">
          <img src={champan} alt="champan" className="iconoFiesta" />
          <h2>Fiesta</h2>
          <p className="mt-3">Te esperamos el 19 de Enero a las 21hs</p> 
          <p>Lugar Salon Abril 
          </p>
        </div>
        
        <div className="col-sm-6">
          <img src="" alt="" />
        </div>
      </div>


      {/* FOTOS */}

      <section className="galeria">
          <h4 className="sobremi">SOBRE MI</h4>
            <div className="container ">
              <div className="row galleria">
              <div className="col galeria-container ">
                <a  href=""><img src={foto1} alt="" loading="lazy" className="fotosGaleria"/></a>
              </div>
              <div className="col galeria-container" >
                <a href=""><img src={foto2} alt="" loading="lazy" className="fotosGaleria"/></a>
              </div>
              <div className="col galeria-container">
                <a href=""><img src={foto3} alt="" loading="lazy" className="fotosGaleria"/></a>
              </div>
              <div className="col galeria-container">
                <a href=""><img src={foto4} alt="" loading="lazy" className="fotosGaleria"/></a>
              </div>
            </div>
          </div>
          <div className="container galeria-container mt-2">
              <div className="row galleria">
              <div className="col galeria-container">
                <a href=""><img src={foto5} alt="" loading="lazy"  className="fotosGaleria"/></a>
              </div>
              <div className="col galeria-container" >
                <a href=""><img src={foto6} alt="" loading="lazy" className="fotosGaleria"/></a>
              </div>
              <div className="col galeria-container">
                <a href=""><img src={foto7} alt="" loading="lazy" className="fotosGaleria"/></a>
              </div>
              <div className="col galeria-container2">
                <a href=""><img src={foto8} alt="" loading="lazy" className="fotosGaleria"/></a>
              </div>
            </div>
          </div>
      </section>


      {/* CONFIRMAR ASISTENCIA */}

      <section>
        <div className="confirmacion mb-5">
          <h1>CONFIRMACION DE ASISTENVIA</h1>
          <p>Valor Tarjeta</p>
          <p>Adultos : $9500 </p>
          <p>Niños (3 a 10 años) : $2500 </p>

          <p>¡Esperamos que seas parte de esta gran celebracion! </p>
          <p>Confirmanos tu asistenciaantes del 12/01/2024</p>
          
          <a href="" className="linkBoton mt-5"><button className="boton mb-5"> CONFIRMAR ASISTENCIA </button></a>
          </div>
          
      </section>



    </>
  )
}

export default App