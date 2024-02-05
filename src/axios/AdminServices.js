import axios from 'axios';

class AdminService {
  async addItem(data) {
    try {
      const response = await axios.post("http://localhost:3001/menu/add", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AdminService();
