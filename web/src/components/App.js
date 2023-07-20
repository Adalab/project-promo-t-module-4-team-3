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
import Modal from './Modal';
import Landing from '../components/Landing';

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
  const[modal, setModal] = useState( false );
  const Toggle = () => setModal(!modal);
  const [url, setUrl] = useState('');


  const handleChangeForm = (input, value) => {
    setData({ ...data, [input]: value });
  };
  const handleInputForm = (ev) => {
    setData({ ...data, [ev.target.id]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    // ev.preventDefault();
    for (const field in data) {
      if(data[field] === '') {
       setUrl('No se pudo crear su card, por favor rellene todos los campos');
        return 
      }    

    }
    callToApi(data).then((response) => {
      console.log(response);
      if (response.cardURL) {
        setUrl(response.cardURL);
      } else {
        setUrl('No se pudo crear su card, por favor rellene todos los campos');
      }
    });
    setModal(!modal);
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
      <Routes>
        <Route path='/' element={<></>} />
        <Route
          path='*'
          element={<Header imgLogo={imgLogo} imgNasa={logo_nasa} />}
        />
      </Routes>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route
            path='/preview'
            element={
              <>
                <h2 className='header__text2'>
                  Formulario de registro candidaturas
                </h2>
                {/*<Header imgLogo={imgLogo} imgNasa={logo_nasa} />*/}
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
                  <Modal
                    show={modal}
                    url={url}
                    title='My Modal'
                    close={Toggle}
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
                {/*
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
            */}
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
