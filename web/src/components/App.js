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
<<<<<<< HEAD:web/src/components/App.js
import Repository from './Repository';

=======
import Landing from '../components/Landing';
>>>>>>> landing:src/components/App.js

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
      <main className='main'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route
            path='/preview'
            element={
              <>
<<<<<<< HEAD:web/src/components/App.js
                <h2 className='header__text2'>
                  Formulario de registro candidaturas
                </h2>

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
            path='/Repositorio'
            element={
              <>
                <h2 className='header__text2'>
                  Listado de proyectos
                </h2>
                <Repository />
=======
                <Header imgLogo={imgLogo} imgNasa={logo_nasa} />
                <Preview data={data} />
                <Form
                  data={data}
                  handleChangeForm={handleChangeForm}
                  handleInputForm={handleInputForm}
                  handleReset={handleInputReset}
                  handleSubmit={handleSubmit}
                  url={url}
                />
                <Footer imgLogo={imgLogo} />
>>>>>>> landing:src/components/App.js
              </>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
export default App;
