import { Link } from 'react-router-dom';
import getAllListOfProjects from '../services/api_allprojects';

import Preview from './Preview';
import '../styles/components/repository.scss';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';

function Repository() {
  const [listProjects, setListProjects] = useState([]);
  const [searchA, setSearchA] = useState('');
  const [searchP, setSearchP] = useState('');
  const [actualPage, setactualPage] = useState(1);
  const [actualInfo, setActualInfo] = useState({});
  const [actualURL, setactualURL] = useState();

  const handleInputA = (ev) => {
    ev.preventDefault();
    setSearchA(ev.target.value);
  };

  const handleInputP = (ev) => {
    setSearchP(ev.target.value);
  };
  const handlePages = (varValue) => {
    if (varValue === 'null') {
      return actualURL;
    } else if (varValue === 'next') {
      setactualURL(actualInfo.next);
      return setactualPage(actualPage + 1);
    } else if (varValue === 'prev') {
      setactualURL(actualInfo.prev);
      return setactualPage(actualPage - 1);
    }
  };

  //const renderCard = () => {
  /* return dataList
      .filter((obj) => {
        return obj.autor
          .toLocaleLowerCase()
          .includes(searchA.toLocaleLowerCase());
      })
      .filter((obj) => {
        return obj.name
          .toLocaleLowerCase()
          .includes(searchP.toLocaleLowerCase());
      })*/
  //   <ul className='landing-ul'>{renderCard()}</ul>

  useEffect(() => {
    getAllListOfProjects().then((response) => {
      const dataList = response;
      setListProjects(dataList);
      return dataList;
    });
  }, []);

  return (
    <>
      <section>
        <Pagination handlePages={handlePages} actualPage={actualPage} pages={actualInfo.pages} />
      </section>
      <div className='repository'>
        <form className='repository__form'>
          <label className='repository__labelFilter'>Filtrar por Proyecto</label>
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
        </form>

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
