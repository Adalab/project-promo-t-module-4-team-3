const callToApi = (data) => {
  return fetch('https://dev.adalab.es/api/projectCard', {
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
  const fetch = await fetch("http://localhost:4000/api/allprojects");
  const dataJson = await fetch.json();
  return(dataJson);
}

export default {callToApi , getAllListOfProjects} ;
