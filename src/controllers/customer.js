import axios from 'axios';
import Config from './Config';

export const getAllCustomers = () => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${Config.host}${Config.port}/api/customer/`)
      .then(result => {
        console.log('Cus data: ', result.data);
        // if (result.code == 200) {
        //   resolve(result.data);
        // } else {
        //   resolve([]);
        // }
        resolve(result.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
