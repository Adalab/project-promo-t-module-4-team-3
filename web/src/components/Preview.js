import projectImage from '../images/cover.jpeg';
import imgUser from '../images/user.jpeg';

function Preview({ data }) {
  return (
    <>
      <section className='preview'>
        <section className='autor'>
          <section className='info-project'>
        <div className='containerLine'>
          <hr className='line' />
          <p className='subtitleCard'>Proyecto</p>
          <hr className='line2' />
        </div>
              <h2 className='title'>{data.name || 'New Horizons'}</h2>
              <p className='slogan'>
                {data.slogan || 'Diseño de rutas de navegación'}
              </p>
            
           

            <p className='desc'>
              {data.description ||
                'La aplicación traza una ruta completa desde el sitio de aterrizaje hasta el sitio de destino que no supera los 15 grados de pendiente y tiene algún tipo de optimización, por ejemplo, la distancia más corta o la menor cantidad de subida de colinas.'}
            </p>
            <section className='technologies'>
              <p className='textTec'>
                {data.technologies || 'React JS, MongoDB'}
              </p>
            <div className="carpet__container">
              <img className='image' src={data.photo || projectImage} alt='' />
             </div>
              <div className='icons'>
                <span className='globe'>
                  <a href={data.repo}>
                    <i className='fa-solid fa-globe'></i>
                  </a>
                </span>
                <span className='github'>
                  <a href={`https://github.com/${data.demo}`}>
                    <i className='fa-brands fa-github'></i>
                  </a>
                </span>
              </div>
            </section>
          </section>
          <section className='info-autor'>
            <img className='imageCard' src={data.image || imgUser} alt='' />
            <div className='info-autor__desc'>
              <p className='name'>{data.autor || 'Valentina Tereshkova'}</p>
              <p className='job'>
                {data.job || 'Ingeniera de sistemas informáticos'}
              </p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
export default Preview;
