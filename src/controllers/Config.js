import { confirmAlert } from "react-confirm-alert";
import { toast } from 'react-toastify';

class Config {
  constructor() {
    //backend server details
    this.host = 'http://127.0.0.1';
    this.port = ':5000';
  }

  // alert show
  async showAlert(_msg, _title) {
    await confirmAlert({
      title: _title || "Alert",
      message: _msg,
      buttons: [
        {
          label: "Ok"
        }
      ]
    });

    return 0;
  }

  setToast(msg){
    toast( msg, {
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
    });
  }


}

var obj = new Config();
export default obj;
