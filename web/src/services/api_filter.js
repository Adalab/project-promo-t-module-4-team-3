const getAllListOfProjects = async (filterName, filterProject) => {
  const response = await fetch('http://localhost:4000/api/filter?');
  const dataJson = await response.json();
  return dataJson;
};
export default getAllListOfProjects;
