export const doGet = async (url) => {
  const response = await fetch(url);
  const responseJson = await response.json();
  if (response.ok) {
    return responseJson;
  } else {
    console.log(responseJson.message);
  }
};
