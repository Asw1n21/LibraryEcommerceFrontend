import config from '../Configuration/Configuration';
import Axios from './axiosservice';

export default class UserService {
  // Check if admin exists (GET)
  checkAdmin() {
    return Axios.get(config["check-admin"]);
  }

  // Register first admin (POST)
  registerFirstAdmin(data) {
    return Axios.post(config["register-first-admin"], data);
  }

  // Register any user (POST)
  registerUser(data) {
    return Axios.post(config["register-user"], data);
  }

  // Login (POST)
  login(data) {
    return Axios.post(config["get-login"], data);
  }

  // Get all customers (GET)
  getCustomers() {
    return Axios.get(config["get-customers"]);
  }

  // Get all staff (GET)
  getStaff() {
    return Axios.get(config["get-staff"]);
  }
}

