import { Link } from 'react-router-dom';

function Header({ imgLogo, imgNasa }) {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__icon'>
          <img className='header__logo--nasa' src={imgNasa} alt='nasa' />
          {/* <p className='header__text'>Top secret NASA</p> */}
        </div>
      <div className='header__container2'>
        <h1 className='header__title'>CosmoCoders</h1>
        {/* <p className='header__text2'>
          Formulario de registro candidaturas
        </p> */}
      </div>
        <Link to='/Repositorio'>
          {' '}
          <button className='header__button'>VER PROYECTOS</button>
        </Link>
        {/* //<img className='header__logo' src={imgLogo} alt='' /> */}
      </div>
    </header>
  );
}
export default Header;
