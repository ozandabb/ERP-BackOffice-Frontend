import axios from "axios";
import Config from "./Config";

export const getAllCustomers = () => {
    return new Promise((resolve, reject) => {
      return axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((result) => {
          if (result.data.code == 200) {
            resolve(result.data.data);
          } else {
            resolve([]);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  };