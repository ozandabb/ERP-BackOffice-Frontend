import axios from 'axios';
import Config from './Config';

//get All customers
export const getAllCustomers = () => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${Config.host}${Config.port}/api/customer/`)
      .then(result => {
        resolve(result.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//Add a customer
export const addCustomer = (data) => {
  return new Promise((resolve, reject) => {
    return axios
      .post(`${Config.host}${Config.port}/api/customer/`, data)
      .then((result) => {
        resolve(result.data );
        console.log(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

