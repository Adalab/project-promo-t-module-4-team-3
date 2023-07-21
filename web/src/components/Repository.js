import { Link } from 'react-router-dom';


import Preview from './Preview';
import '../styles/components/repository.scss';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import getfiltered from '../services/api_filter';
import getpage from '../services/api_pagination';

function Repository() {
  const [listProjects, setListProjects] = useState([]);
  const [searchA, setSearchA] = useState('');
  const [searchP, setSearchP] = useState('');
  const [infoPages, setInfoPages] =useState({
    // page: ,
    // numPages: ,
    // next:
    // prev:
  })
  console.log(infoPages)
  const handleInputA = (ev) => {
    ev.preventDefault();
    setSearchA(ev.target.value);
  };

  const handleInputP = (ev) => {
    setSearchP(ev.target.value);
  };

  const handleSubmit = () => {
    getfiltered(searchA, searchP).then((response) => {
      const dataList = response.projects;
      setListProjects(dataList);
      setInfoPages(response.info)
    });
  };

  const handleNext = () => {
     getpage(infoPages.next).then((response) => {
      const dataList = response.projects;
      setListProjects(dataList);
      setInfoPages(response.info);
    });
  };
  const handlePrevious=()=>{
    getpage(infoPages.prev).then((response) => {
      const dataList = response.projects;
      setListProjects(dataList);
      setInfoPages(response.info);
    });
  }

 

  useEffect(() => {
    getfiltered(searchA, searchP).then((response) => {
      const dataList = response.projects;
      setListProjects(dataList);
      setInfoPages(response.info);
      
    });
  }, []);

  return (
    <>
      <div className='repository'>
        <form className='repository__form'>
          <label className='repository__labelFilter'>
            Filtrar por Proyecto
          </label>
          <input
            type='text'
            className='repository__inputFilter'
            onChange={handleInputP}
            value={searchP}
          ></input>
          <label className='repository__labelFilter'>Filtrar por Autora</label>
          <input
            type='text'
            className='repository__inputFilter'
            onChange={handleInputA}
            value={searchA}
          ></input>
          <button className='button' onClick={handleSubmit}>
            Buscar
          </button>
        </form>
        <section className='section_pagination'>
          <Pagination
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            infoPages={infoPages}
          />
        </section>
        <div className='repository__preview'>
          {listProjects.map((project) => {
            return (
              <div key={project.idprojects} className='repository__imagen'>
                <Preview data={project} />;
              </div>
            );
          })}
        </div>
      </div>
      <div className='repository__divLink'>
        <Link to='/' className='repository__link'>
          Volver
        </Link>
      </div>
    </>
  );
}

export default Repository;
