import { Link, useLocation } from 'react-router-dom';

function Header({ imgLogo, imgNasa }) {
  const location = useLocation();
  console.log(location)
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__icon'>
          <Link to='/'>
            <img className='header__logo--nasa' src={imgNasa} alt='nasa' />
          </Link>
        </div>
        <div className='header__container2'>
          <h1 className='header__title'>CosmoCoders</h1>
        </div>
        {/* si esto es falsy entonces devuelve la condición falso y como es falso no pinta nada, en el caso que sea trusty entonces pinta lo que hay detrás de &&*/}
        {location.pathname === '/preview' && (
          <Link to='/projects'>
            <button className='header__button'>VER PROYECTOS</button>
          </Link>
        )}
        {location.pathname === '/projects' && (
          <Link to='/preview'>
            <button className='header__button'>AÑADIR PROYECTO</button>
          </Link>
        )}
      </div>
    </header>
  );
}
export default Header;
