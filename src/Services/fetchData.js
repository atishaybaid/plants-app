export const fetchData = async (endpoint) => {
  if (!endpoint) {
    console.error("API Endpoint cannot be empty");
    return;
  }
  try {
    const response = await fetch(endpoint);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log("API Error");
    console.log(error);
  }
};
