import '../styles/components/landing.scss';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { Link } from 'react-router-dom';
import iconInfo from '../images/acerca-de.png';
import iconTeam from '../images/grupo.png';
import imgLogo from '../images/top-secret.png';

const Landing = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#000',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#934ed2',
            },
            links: {
              color: '#934ed2',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1.5,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className='divIcon'>
        <img className='iconInfo icon' src={iconInfo} alt='' />
        <img className='iconTeam icon' src={iconTeam} alt='' />
      </div>
      <div className='divLogo'>
        <img className='imgLogo' src={imgLogo} alt='' />
        <div className='btnLanding'>
          <Link to='/preview' className='btnStart'>
            <span id='span1'></span>
            <span id='span2'></span>
            <span id='span3'></span>
            <span id='span4'></span>
            <p className='text__button'>Comenzar</p>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Landing;
