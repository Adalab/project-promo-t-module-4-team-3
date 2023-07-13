import { Link } from 'react-router-dom'

function Header({ imgLogo, imgNasa }) {
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
        <Link to='/Repositorio'>
          {' '}
          <button className='header__button'>VER PROYECTOS</button>
        </Link>
      </div>
    </header>
  );
}
export default Header;
