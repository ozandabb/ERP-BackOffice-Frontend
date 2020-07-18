import axios from 'axios';
import Config from './Config';

//get All Users
export const getAllUsers = () => {
    return new Promise((resolve, reject) => {
      return axios
        .get(`${Config.host}${Config.port}/api/users/all`)
        .then(result => {
          resolve(result.data);
          console.log(result.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
