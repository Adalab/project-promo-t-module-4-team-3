// const callToApi = (data) => {
//   return fetch('https://dev.adalab.es/api/projectCard', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: { 'content-type': 'application/json' },
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       return result;
//     });
// };

const callToApi = (data) => {
  fetch('http://localhost:4000/api/projects/add', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
};

async function getAllListOfProjects() {
  const fetchProjects = await fetch('http://localhost:4000/api/allprojects');
  const dataJson = await fetchProjects.json();
  return(dataJson);
}

export default (callToApi , getAllListOfProjects) ;
