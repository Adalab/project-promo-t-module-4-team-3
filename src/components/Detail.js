import {Link} from "react-router-dom";

function Detail({ imgNasa, data, projectImage, imgUser }) {
  return (
    <div>
      <header className="header">
        <div className="header__container">
          <div className="header__icon">
            <img className="header__logo--nasa" src={imgNasa} alt="nasa" />
            <p className="header__text">Top secret NASA</p>
          </div>
        </div>
        <div className="header__container2">
          <h1 className="header__title">🧑‍🚀CosmoCoders🚀</h1>
          <p className="header__text2">
            Red de reclutamiento para futuros programadores proyecto:
            Destructuring.
          </p>
        </div>
      </header>
      <main>
        <section className="preview">
          <img className="image" src={data.photo || projectImage} alt="" />
          <section className="autor">
            <section className="info-project">
              <div className="containerLine">
                <hr className="line" />
                <p className="subtitleCard">Personal Project Card</p>
                <hr className="line2" />
              </div>
              <h2 className="title">{data.name || "New Horizons"}</h2>
              <p className="slogan">
                {data.slogan || "Diseño de rutas de navegación"}
              </p>
              <p className="desc">
                {data.desc ||
                  "La aplicación traza una ruta completa desde el sitio de aterrizaje hasta el sitio de destino que no supera los 15 grados de pendiente y tiene algún tipo de optimización, por ejemplo, la distancia más corta o la menor cantidad de subida de colinas."}
              </p>
              <section className="technologies">
                <p className="textTec">
                  {data.technologies || "React JS, MongoDB"}
                </p>
                <div className="icons">
                  <span className="globe">
                    <a href={data.repo}>
                      <i className="fa-solid fa-globe"></i>
                    </a>
                  </span>
                  <span className="github">
                    <a href={`https://github.com/${data.demo}`}>
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </span>
                </div>
              </section>
            </section>
            <section className="info-autor">
              <img className="imageCard" src={data.image || imgUser} alt="" />
              <p className="job">
                {data.job || "Ingeniera de sistemas informáticos"}
              </p>
              <p className="name">{data.autor || "Valentina Tereshkova"}</p>
            </section>
          </section>
        </section>
        <Link className="linkDetail" to="/">Volver</Link>
      </main>
    </div>
  );
}
export default Detail;
