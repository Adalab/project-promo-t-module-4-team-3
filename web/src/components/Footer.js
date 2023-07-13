function Footer({ imgLogo }) {
  return (
    <footer className='footer'>
      <p className='footer__copy'> &copy;2023 grupo3</p>
      <a href='https://adalab.es/bootcamps-online' target='_blank'>
        <img className='footer__logo' src={imgLogo} alt='Logo Adalab' />
      </a>
    </footer>
  );
}
export default Footer;
