import axios from 'axios';
import Config from '../Config';

//change this when deploying
const url = `${Config.host}${Config.port}`;

//insert order
// export const insertOrder = (data, token) => {
//     return new Promise( (resolve, reject) => {
//         return axios.post(`${url}/api/order`)
//     })
// }

//get all orders
//export const getAllOrders = ()
