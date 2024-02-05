import axios from "axios";

class Request {
  async get(data) {
    try {
      const response = await axios.get(
        "http://localhost:3001/" + data.url,
        data.data,
        {
          withCredentials: data.credentials ?? false,
        }
      );
      return response.data;
    } catch (error) {
      return error;
      console.error("Error:", error.message);
      throw error;
    }
  }

  async post(data) {
    try {
      const response = await axios.post(
        "http://localhost:3001/" + data.url,
        data.data
      );
      return response.data;
    } catch (error) {
      return error;
      console.error("Error:", error.message);
      throw error;
    }
  }
}

export default new Request();
