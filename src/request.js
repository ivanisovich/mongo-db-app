import axios from "axios";

class Axios {
  async request(params) {
    try {
      const { method, url, data, credentials = false } = params;
      const baseUrl = "http://localhost:3001/";

      if (data !== undefined) {
        const response = await axios[method](
          `${baseUrl}${url}`,
          data,
          {
            withCredentials: credentials,
          }
        );
        return response.data;
      } else {
        const response = await axios[method](
          `${baseUrl}${url}`,
          {
            withCredentials: credentials,
          }
        );
        return response.data;
      }
    } catch (error) {
      return error;
    }
  }
}


export default new Axios();
