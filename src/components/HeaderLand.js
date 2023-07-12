import '../styles/components/headerLand.scss';
import iconInfo from '../images/acerca-de.png';
import iconTeam from '../images/grupo.png';
function HeaderLand() {
  return (
    <>
      <div className='headerLand'>
        <div className='divIcon'>
          <img className='iconInfo icon' src={iconInfo} alt='info' />
          <img className='iconTeam icon' src={iconTeam} alt='team' />
        </div>
        <div className='divTextLand'>
          <p className='textInfo'>
            "En esta aplicación encontrarás una página donde se muestran
            proyectos alucinantes sobre diferentes temas. Si deseas dejar huella
            puedes subir tu propio proyecto clicando en (nombre del boton) que
            te dará paso a un formulario donde podrás rellenar tus datos y
            embarcarte en este viaje de distribución del saber"
          </p>
          <p className='textTeam'>
            "Somos un grupo de 5 mujeres programadoras fullstack dedicadas al
            desarrollo web.Creamos entornos de comunicacion para futuros
            programadores a través de nuestra plataforma donde comparten sus
            proyectos y se dan a conocer. Somos una ventana abierta a la
            tecnologia , el conocimiento y el futuro. Nuestra mision es apoyar
            el creciminto y potencial de cada desarrolldaor para que pueda
            compartir su legado con el mundo."
          </p>
        </div>
      </div>
    </>
  );
}
export default HeaderLand;
