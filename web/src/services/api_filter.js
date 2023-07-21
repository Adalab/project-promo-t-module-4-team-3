const getfiltered = async (filterName, filterProject) => {
  const response = await fetch(
    `http://localhost:4000/api/filter?filterName=${filterName}&filterProject=${filterProject}`
  );
  const dataJson = await response.json();
  return dataJson;
};
export default getfiltered;
