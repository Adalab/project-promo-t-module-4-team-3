import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useLocation, matchPath } from "react-router";
import '../styles/main.scss';
import imgLogo from '../images/logo-adalab.png';
import callToApi from '../services/api';
import Header from './Header';
import Preview from './Preview';
import Form from './Form';
import Footer from './Footer';
import logo_nasa from '../images/logo_nasa.jpg';
import lStorage from '../services/localstorage';
// import Detail from './Detail';

function App() {
  const [data, setData] = useState(
    lStorage.get('lsData', {
      name: '',
      slogan: '',
      technologies: '',
      demo: '',
      repo: '',
      desc: '',
      autor: '',
      job: '',
      image: '',
      photo: '',
    })
  );

  const [url, setUrl] = useState('');

  const handleChangeForm = (input, value) => {
    setData({ ...data, [input]: value });
  };
  const handleInputForm = (ev) => {
    setData({ ...data, [ev.target.id]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    callToApi(data).then((response) => {
      if (response.success) {
        setUrl(response.cardURL);
      } else {
        setUrl('No se pudo crear su card, por favor rellene todos los campos');
      }
    });
  };
  useEffect(() => {
    lStorage.set('lsData', data);
  }, [data]);

  const handleInputReset = (ev) => {
    setData({
      name: '',
      slogan: '',
      technologies: '',
      demo: '',
      repo: '',
      desc: '',
      autor: '',
      job: '',
      image: '',
      photo: '',
    });
    setUrl('');
  };

// OBTENER DATOS DE DETALLE DE PROYECTO
// const {pathname} = useLocation();
// const routeData = matchPath("/detail")

  return (
    <div className='container'>
      <Header imgLogo={imgLogo} imgNasa={logo_nasa} />
      <main className='main'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Preview data={data} />
                <Form
                  data={data}
                  handleChangeForm={handleChangeForm}
                  handleInputForm={handleInputForm}
                  handleReset={handleInputReset}
                  handleSubmit={handleSubmit}
                  url={url}
                />
              </>
            }
          />
          {/* <Route path='/detail'
          element={<Detail/>}>
          </Route> */}
        </Routes>
      </main>
      <Footer imgLogo={imgLogo} />
    </div>
  );
}
export default App;
