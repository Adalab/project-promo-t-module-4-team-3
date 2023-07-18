import Close from '../images/times-solid-svgrepo-com.svg';

 const Modal = ({ show, close,url }) => {
   return (
     <>
       {show ? (
         <div className='modalContainer' onClick={() => close()}>
           <div className='modal' onClick={(e) => e.stopPropagation()}>
             <header className='modal_header'>
               <button className='close' onClick={() => close()}>
                 <img src={Close} alt='close' />
               </button>
             </header>
             <main className='modal_content'>
               {url !==
               'No se pudo crear su card, por favor rellene todos los campos'
                 ? 'La tarjeta ha sido creada '
                 : 'No se pudo crear su card, por favor rellene todos los campos'}
               <div className='buttons_container'>
                 <button className='card_button'>
                   <a className='card_button_url' href={url}>
                     Ver tarjeta creada
                   </a>
                 </button>
                 <button className='project_button'>
                   Ver listado de proyectos
                 </button>
               </div>
             </main>
             {/* <footer className='modal_footer'>
               
               <button className='modal-close' onClick={() => close()}>
                
                 Cancel
               </button>
               <button className='submit'>Submit</button>
             </footer> */}
           </div>
         </div>
       ) : null}
     </>
   );
 };
 export default Modal;