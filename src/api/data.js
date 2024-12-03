const axios = require('axios');

const getRequest = async (url) => {
  try {
    const { data: response } = await axios.get(url);
    return response;
  } catch (error) {
    return error;
  }
};

export const getRequestSpeceficCountry = async (query) => {
  try {
    const { data: response } = await axios.get(
      `https://restcountries.com/v3.1/name/${query}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export default getRequest;
