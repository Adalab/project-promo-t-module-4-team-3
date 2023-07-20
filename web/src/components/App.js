import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/main.scss';
import imgLogo from '../images/logo-adalab.png';
import callToApi from '../services/api';
import Header from './Header';
import Preview from './Preview';
import Form from './Form';
import Footer from './Footer';
import logo_nasa from '../images/logo-nasa.png';
import lStorage from '../services/localstorage';
import Repository from './Repository';

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
    // ev.preventDefault();

    callToApi(data).then((response) => {
      console.log(response);
      if (response.cardURL) {
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
  return (
    <div className='container'>
      <Header imgLogo={imgLogo} imgNasa={logo_nasa} />
      <main className='main'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <h2 className='header__text2'>Formulario de registro candidaturas</h2>

                <div className='form_container'>
                  <Preview data={data} />
                  <Form
                    data={data}
                    handleChangeForm={handleChangeForm}
                    handleInputForm={handleInputForm}
                    handleReset={handleInputReset}
                    handleSubmit={handleSubmit}
                    url={url}
                  />
                </div>
              </>
            }
          />
          <Route
            path='/projects'
            element={
              <>
                <h2 className='header__text2'>Listado de proyectos</h2>
                <Repository />
              </>
            }
          />
        </Routes>
      </main>
      <Footer imgLogo={imgLogo} />
    </div>
  );
}
export default App;
