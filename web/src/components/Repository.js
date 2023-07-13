import { Link } from 'react-router-dom';
import getAllListOfProjects from '../services/api_allprojects'

import Preview from './Preview';
import '../styles/components/respositorio.scss';
import { useEffect, useState } from 'react';

function Repository() {

  const dataObject = [
    {
      name: 'Adalab',
      slogan: 'Sigueme y lo verás',
      technologies: 'Comunicacion',
      demo: 'teste',
      repo: 'https://github.com/SuelenGalhardo?tab=repositories',
      desc: 'Paquita, una de las mejores representantes de actores de España en los 90, se ve buscando nuevas estrellas desesperadamente, después de perder a su mayor cliente.',
      autor: 'Paquita salas',
      job: 'MOCATRIZ',
      image: 'https://idolosolvidados.com/wp-content/uploads/2019/07/paquita-salas-1561634165.jpg',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqORQLuuw8oSdVXctAxDvPI1_1ZQN32BNwHtf1dvqgNVqIYtlff_ZQvlEHvWciaBp8iYE&usqp=CAU',
    },
    {
      name: 'Adalab',
      slogan: 'Sigueme y lo verás',
      technologies: 'Comunicacion',
      demo: 'teste',
      repo: 'https://github.com/SuelenGalhardo?tab=repositories',
      desc: 'Paquita, una de las mejores representantes de actores de España en los 90, se ve buscando nuevas estrellas desesperadamente, después de perder a su mayor cliente.',
      autor: 'Paquita salas',
      job: 'MOCATRIZ',
      image: 'https://idolosolvidados.com/wp-content/uploads/2019/07/paquita-salas-1561634165.jpg',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqORQLuuw8oSdVXctAxDvPI1_1ZQN32BNwHtf1dvqgNVqIYtlff_ZQvlEHvWciaBp8iYE&usqp=CAU',
    },
    {
      name: 'Adalab',
      slogan: 'Sigueme y lo verás',
      technologies: 'Comunicacion',
      demo: 'teste',
      repo: 'https://github.com/SuelenGalhardo?tab=repositories',
      desc: 'Paquita, una de las mejores representantes de actores de España en los 90, se ve buscando nuevas estrellas desesperadamente, después de perder a su mayor cliente.',
      autor: 'Paquita salas',
      job: 'MOCATRIZ',
      image: 'https://idolosolvidados.com/wp-content/uploads/2019/07/paquita-salas-1561634165.jpg',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqORQLuuw8oSdVXctAxDvPI1_1ZQN32BNwHtf1dvqgNVqIYtlff_ZQvlEHvWciaBp8iYE&usqp=CAU',
    },
    {
      name: 'Adalab',
      slogan: 'Sigueme y lo verás',
      technologies: 'Comunicacion',
      demo: 'teste',
      repo: 'https://github.com/SuelenGalhardo?tab=repositories',
      desc: 'Paquita, una de las mejores representantes de actores de España en los 90, se ve buscando nuevas estrellas desesperadamente, después de perder a su mayor cliente.',
      autor: 'Paquita salas',
      job: 'MOCATRIZ',
      image: 'https://idolosolvidados.com/wp-content/uploads/2019/07/paquita-salas-1561634165.jpg',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqORQLuuw8oSdVXctAxDvPI1_1ZQN32BNwHtf1dvqgNVqIYtlff_ZQvlEHvWciaBp8iYE&usqp=CAU',
    },
  ];
  const [listProjects, setListProjects ] = useState([])

  useEffect(()=>{
    getAllListOfProjects().then((response)=>{
      const dataList = response; 
      setListProjects(dataList);
      return dataList
    })
  },[])
       console.log('HOLA SOY LIST PROYECTS',listProjects)

  return (
    <>
      <div className='repository'>
        <div className='repository__preview'>
          {listProjects.map((object) => {
            return (
              <div className='repository__imagen'>
                <Preview data={object} />;
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
