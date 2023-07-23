import React, { useState } from 'react';
import '../styles/components/headerLand.scss';
import iconInfo from '../images/acerca-de.png';
import iconTeam from '../images/grupo.png';

function HeaderLand() {
  const [showInfo, setShowInfo] = useState(false);
  const [showTeam, setShowTeam] = useState(false);

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
    setShowTeam(false);
  };

  const handleTeamClick = () => {
    setShowTeam(!showTeam);
    setShowInfo(false);
  };

  return (
    <>
      <div className='headerLand'>
        <div className='divIcon'>
          <img
            className={`icon iconInfo ${showInfo ? 'active' : ''}`}
            src={iconInfo}
            alt='info'
            onClick={handleInfoClick}
          />
          <img
            className={`icon iconTeam ${showTeam ? 'active' : ''}`}
            src={iconTeam}
            alt='team'
            onClick={handleTeamClick}
          />
        </div>
        <div className='divTextLand'>
          <p className={`textInfo ${showInfo ? 'active' : ''}`}>
            "En esta aplicación encontrarás una página donde se muestran
            proyectos alucinantes sobre diferentes temas. Si deseas dejar huella
            puedes subir tu propio proyecto clicando en "Comenzar" que
            te dará paso a un formulario donde podrás rellenar tus datos y
            embarcarte en este viaje de distribución del saber"
          </p>
          <p className={`textTeam ${showTeam ? 'active' : ''}`}>
            "Somos un grupo de 5 mujeres programadoras fullstack dedicadas al
            desarrollo web.Creamos entornos de comunicacion para futuros
            programadores a través de nuestra plataforma donde comparten sus
            proyectos y se dan a conocer. Somos una ventana abierta a la
            tecnologia , el conocimiento y el futuro. Nuestra misión es apoyar
            el crecimiento y potencial de cada desarrollador para que pueda
            compartir su legado con el mundo."
          </p>
        </div>
      </div>
    </>
  );
}

export default HeaderLand;
