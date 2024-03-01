import axios from "axios";

class Axios {
  async request(params) {
    try {
      const { method, url, data } = params;
      const baseUrl = "http://localhost:3001/";
      const config = {
        withCredentials: params.credentials || false,
      };

      let response;
      if (!data) data = [];
      response = await axios[method](baseUrl + url, data, config);

      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default new Axios();
