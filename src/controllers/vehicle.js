import axios from 'axios';
import Config from './Config';

//get All vehicles
export const getAllVehicles = () => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${Config.host}${Config.port}/api/vehicle/`)
      .then(result => {
        resolve(result.data);
        console.log(result.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//Delete Vehicle
export const deleteVehicle = (id) => {
    return new Promise((resolve, reject) => {
      return axios
        .delete(`${Config.host}${Config.port}/api/vehicle/${id}`)
        .then((result) => {
          resolve({ code: 200, message: result.data.message });
        })
        .catch((err) => {
          reject({ code: 0, error: err });
        });
    });
  };