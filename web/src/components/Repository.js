import { Link } from 'react-router-dom';
import getAllListOfProjects from '../services/api_allprojects'

import Preview from './Preview';
import '../styles/components/respositorio.scss';
import { useEffect, useState } from 'react';

function Repository() {

  
  const [listProjects, setListProjects ] = useState([])

  useEffect(()=>{
    getAllListOfProjects().then((response)=>{
      const dataList = response; 
      setListProjects(dataList);
      return dataList
    })
  },[])


  return (
    <>
      <div className='repository'>
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
//</><Preview data={data} />
