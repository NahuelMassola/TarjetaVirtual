
import fotoPrincipal from "/principal.jpeg"
import './App.css'
import { useState , useEffect } from "react"
import { useRef } from "react"
import champan from "/champan.svg"
import foto1 from "/1.jpg"
import foto2 from "/2.jpg"
import foto3 from "/3.jpg"
import foto4 from "/4.jpg"
import ReactPlayer from "react-player"
import videoUrl from "/video.mp4"


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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center colFoto"> 
          <img src={fotoPrincipal} alt="" className="foto"/>
          </div>
        </div>
        {/* CONTADOR */}
        <div className="row ">
          <div className="col-md-12 col-sm-12 text-center contador pt-3"> FALTAN : </div>
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
        <div className="col">
          <img src={champan} alt="champan" className="iconoFiesta" />
          <h2>FIESTA</h2>
          <p className="mt-3">¡Te invito el Viernes 19 de Enero a las 20:30hs para festejar este gran momento de mi vida!</p>
          <p>Salón La Estación Vip, Av. Alem 856 ,  Córdoba.</p>
          <p>Clickeá en el botón de abajo y encontrá las indicaciones para llegar, ¡nos vemos!😉</p> 
        </div>
        <a href="https://www.google.com/maps/place/La+estacion+vip/@-31.3928006,-64.1655922,3a,75y,20.79h,72.46t/data=!3m6!1e1!3m4!1sFmcQk7G_eECzdwKY4CZyog!2e0!7i16384!8i8192!4m14!1m7!3m6!1s0x9432999dbbb87f31:0x159c2bb1df0992ff!2sLa+estacion+vip!8m2!3d-31.3927973!4d-64.1654974!16s%2Fg%2F11rwrrtv_q!3m5!1s0x9432999dbbb87f31:0x159c2bb1df0992ff!8m2!3d-31.3927973!4d-64.1654974!16s%2Fg%2F11rwrrtv_q?entry=ttu" className="linkBoton mt-5"><button className="boton mb-5"> COMO LLEGAR </button></a>
      </div>


     {/*  video */}

    <div className="video">
      < ReactPlayer
          url={videoUrl}
          playing={true}
          volume={1}
          controls
          loop
      />
    </div>


      {/* FOTOS */}

      <section className="galeria">
          <h4 className="sobremi"></h4>
            <div className="container ">
              <div className="row galleria">
              <div className="col galeria-container ">
                <a  href={foto1}  ><img src={foto1} alt="" loading="lazy" className="fotosGaleria"/></a>
              </div>
              <div className="col galeria-container" >
                <a href={foto2}><img src={foto2} alt="" loading="lazy" className="fotosGaleria"/></a>
              </div>
              <div className="col galeria-container">
                <a href={foto3}><img src={foto3} alt="" loading="lazy" className="fotosGaleria"/></a>
              </div>
              <div className="col galeria-container">
                <a href={foto4}><img src={foto4} alt="" loading="lazy" className="fotosGaleria"/></a>
              </div>
            </div>
          </div>
          
      </section>


      {/* CONFIRMAR ASISTENCIA */}

      <section>
        <div className="confirmacion mb-5">
          <h1>CONFIRMACION DE ASISTENCIA</h1>
          <p>¡ Esperamos que seas parte de esta gran celebracion ! </p>
          <p>Hay Momentos inolvidables que se atesoran en el corazon</p>
          <p>Por ello deseo que compartas conmigo este dia tan especial!</p>
          <p>Confirmanos tu asistencia antes del 31/12/2023</p>
  
          <a href="https://w.app/8w5iRW" className="linkBoton mt-5"><button className="boton mb-5"> CONFIRMAR ASISTENCIA </button></a>
          </div>
      </section>



    </>
  )
}

export default App