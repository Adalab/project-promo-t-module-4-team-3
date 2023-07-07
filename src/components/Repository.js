import { Link } from 'react-router-dom';

import Preview from './Preview';
import '../styles/components/respositorio.scss';

function Repository({ data }) {
  return (
    <>
      <div className='repository'>
        <h1>CosmoCoders</h1>
        <br />
        <br />
        <p>
          Proviene del griego κόσμος que significa «orden, dispuesto de manera ordenada» y es la
          noción antagónica del caos. Hoy en día se usa como sinónimo del término universo. En el
          área de la cosmología, el término cosmos suele usarse de un modo técnico refiriéndose a un
          espacio-tiempo continuo en el (postulado) multiverso.
        </p>
        <div>
          <br />
          <br />

          <p>Lo sentimos, todavía no hay ningún proyecto presentado</p>
          <br />
          <br />
          <Link to='/Inicio'>Volver</Link>
        </div>
      </div>
    </>
  );
}
export default Repository;
//</><Preview data={data} />
