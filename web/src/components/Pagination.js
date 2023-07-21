function Pagination({ handleNext, handlePrevious,infoPages}) {

  return (
    <form className='form__Pagination'>
      <button
        className={
          !infoPages.prev ? 'input__Previous disabled' : 'input__Previous'
        }
        onClick={handlePrevious}
      >
        Previous
      </button>
      <span className = 'pagination__text'>
        Página {infoPages.page + 1} de {infoPages.numPages}
      </span>
      <button
        className={!infoPages.next ? 'input__Next disabled' : 'input__Next'}
        onClick={handleNext}
      >
        Next
      </button>
    </form>
  );
}

export default Pagination;
