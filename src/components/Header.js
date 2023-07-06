function Header({ imgLogo, imgNasa }) {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__icon'>
          <img className='header__logo--nasa' src={imgNasa} alt='nasa' />
          <p className='header__text'>Top secret NASA</p>
        </div>
        <img className='header__logo' src={imgLogo} alt='' />
      </div>
      <div className='header__container2'>
        <h1 className='header__title'>🧑‍🚀CosmoCoders🚀</h1>
        <p className='header__text2'>
          Red de reclutamiento para futuros programadores proyecto:
          Destructuring.
        </p>
        <button className='header__button'>VER PROYECTOS</button>
      </div>
    </header>
  );
}
export default Header;
