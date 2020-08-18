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
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//Delete a customer
export const deleteCustomer = (id) => {
  return new Promise((resolve, reject) => {
    return axios
      .delete(`${Config.host}${Config.port}/api/customer/${id}`)
      .then((result) => {
        resolve({ code: 200, message: result.data.message });
      })
      .catch((err) => {
        reject({ code: 0, error: err });
      });
  });
};


export const getCustomerById = (id) => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${Config.host}${Config.port}/api/customer/${id}`)
      .then((result) => {
          resolve(result.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
