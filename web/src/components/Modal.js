import Close from '../images/times-solid-svgrepo-com.svg';

 const Modal = ({ show, close,url }) => {
   return (
     <>
       {' '}
       {show ? (
         <div className='modalContainer' onClick={() => close()}>
           {' '}
           <div className='modal' onClick={(e) => e.stopPropagation()}>
             {' '}
             <header className='modal_header'>
               {' '}
               <h2 className='modal_header-title'></h2>
               <button className='close' onClick={() => close()}>
                 {' '}
                 <img src={Close} alt='close' />{' '}
               </button>{' '}
             </header>{' '}
             <main className='modal_content'>
               {url !==
               'No se pudo crear su card, por favor rellene todos los campos'
                 ? 'La tarjeta ha sido creada '
                 : 'No se pudo crear su card, por favor rellene todos los campos'}
             <button className='card'>Ver tarjeta creada</button>
             </main>{' '}
             <button className='projects'>Ir a listado de proyectos</button>
             <footer className='modal_footer'>
               {' '}
               <button className='modal-close' onClick={() => close()}>
                 {' '}
                 Cancel{' '}
               </button>{' '}
               <button className='submit'>Submit</button>{' '}
             </footer>{' '}
           </div>{' '}
         </div>
       ) : null}{' '}
     </>
   );
 };
 export default Modal;