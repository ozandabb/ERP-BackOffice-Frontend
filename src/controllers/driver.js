import axios from 'axios';
import Config from './Config';

//get All drivers
export const getAllDrivers = () => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${Config.host}${Config.port}/api/driver/`)
      .then(result => {
        resolve(result.data);
        console.log(result.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//Delete Driver
export const deleteDriver = (id) => {
  return new Promise((resolve, reject) => {
    return axios
      .delete(`${Config.host}${Config.port}/api/driver/${id}`)
      .then((result) => {
        resolve({ code: 200, message: result.data.message });
      })
      .catch((err) => {
        reject({ code: 0, error: err });
      });
  });
};

//Add Driverr
export const addDriverr = (data) => {
  return new Promise((resolve, reject) => {
    return axios
      .post(`${Config.host}${Config.port}/api/logistics/driver/`, data)
      .then((result) => {
        resolve(result.data );
      })
      .catch((err) => {
        reject(err);
      });
  });
};
