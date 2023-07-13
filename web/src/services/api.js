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
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
    
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("API",result);
      return result;
    });
};


export default callToApi;
