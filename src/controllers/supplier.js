import axios from 'axios';
import Config from './Config';

//get All suppliers
export const getAllSuppliers = () => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${Config.host}${Config.port}/api/supplier/all`)
      .then(result => {
        resolve(result.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//Add supplier
export const addSupplier = (data) => {
  return new Promise((resolve, reject) => {
    return axios
      .post(`${Config.host}${Config.port}/api/supplier/add`, data)
      .then((result) => {
        resolve(result.data );
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//Delete a customer
export const deleteSupplier = (id) => {
  return new Promise((resolve, reject) => {
    return axios
      .delete(`${Config.host}${Config.port}/api/supplier/delete/${id}`)
      .then((result) => {
        resolve({ code: 200, message: result.data.message });
      })
      .catch((err) => {
        reject({ code: 0, error: err });
      });
  });
};
