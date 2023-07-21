const getpage = async (pageUrl) => {
  const response = await fetch(pageUrl);
  const dataJson = await response.json();
  return dataJson;
};
export default getpage;
