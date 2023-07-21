import GetAvatar from './GetAvatar';

function Form({
  data,
  handleInputForm,
  handleSubmit,
  url,
  handleChangeForm,
  handleReset,
}) {
  const handleImage = (fichero) => {
    handleChangeForm('image', fichero);
  };
  const handlePhoto = (fichero) => {
    handleChangeForm('photo', fichero);
  };

  return (
    <>
      <section className='form'>
        <div className='form_autor'>
          <section>
            <p className='form__subtitle'>Sobre la autora</p>
            <hr className='form__line form__lineNone' />
            {/* <h2 className='form__title'>Información</h2> */}
          </section>
          <fieldset className='autor_form'>
            <input
              className='input'
              type='text'
              placeholder='Nombre'
              name='autor'
              id='autor'
              value={data.autor}
              onInput={handleInputForm}
            />
            <input
              className='input'
              type='text'
              placeholder='Trabajo'
              name='job'
              id='job'
              value={data.job}
              onInput={handleInputForm}
            />
            <span></span>
          </fieldset>
          <section className='buttons btn-42'>
            <GetAvatar
              text='Subir foto de autora'
              avatar={data.image}
              updateAvatar={handleImage}
            />
          </section>
        </div>
        <div className='form_project'>
          <section className='form__info'>
            <p className='form__subtitle'>Sobre el proyecto</p>
            <hr className='form__line' />
          </section>
          <fieldset className='project'>
            <input
              className='input'
              type='text'
              placeholder='Nombre del proyecto'
              name='name'
              id='name'
              value={data.name}
              onInput={handleInputForm}
            />
            <input
              className='input'
              type='text'
              name='slogan'
              id='slogan'
              placeholder='Slogan'
              value={data.slogan}
              onInput={handleInputForm}
            />
            <div className='slogan-repo'>
              <input
                className='input'
                type='text'
                name='repo'
                id='repo'
                placeholder='Repositorio'
                value={data.repo}
                onInput={handleInputForm}
              />
              <input
                className='input'
                type='text'
                name='demo'
                id='demo'
                placeholder='Demo'
                value={data.demo}
                onInput={handleInputForm}
              />
              <input
                className='input'
                type='text'
                placeholder='Tecnologías'
                name='technologies'
                id='technologies'
                value={data.technologies}
                onInput={handleInputForm}
              />
            </div>
            <textarea
              className='textarea'
              type='text'
              placeholder='Descripción'
              name='desc'
              id='desc'
              value={data.desc}
              onChange={handleInputForm}
            ></textarea>
            <GetAvatar
              text='Subir foto del proyecto'
              avatar={data.photo}
              updateAvatar={handlePhoto}
            />
          </fieldset>
          <section className='buttons'>
            <button
              className='buttons__btn buttons__large'
              onClick={handleSubmit}
            >
              Crear Proyecto
            </button>
            <button
              className='buttons__btn buttons__large '
              onClick={handleReset}
            >
              Borrar todo
            </button>
          </section>
        </div>
        <section className='card'>
          <span className={url === '' ? 'hidden' : ''}>
            {url !==
            'No se pudo crear su card, por favor rellene todos los campos'
              ? ''
              : 'No se pudo crear su card, por favor rellene todos los campos'}
          </span>         
        </section>
      </section>
    </>
  );
}
export default Form;
