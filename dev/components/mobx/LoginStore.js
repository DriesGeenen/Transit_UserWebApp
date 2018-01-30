import axios from "axios";
import { observable, extendObservable } from 'mobx';

class LoginStore {
    constructor() {
        this.apiUrl = "http://localhost:6600/auth/";
        extendObservable(this,
            {
                Email: "",
                Password: "",
                LoggedIn: false
            }
        );

    }

    async SignIn() {
        // todo loggedin controle
        this.LoggedIn = true;
        const body = {email:Email,password:Password};
        let data = await axios.post(this.apiUrl + "login",body);
        localStorage.setItem("token", data.data.token);
    }

    LogOut() {
        this.LoggedIn = false;
        localStorage.clear();
    }


}

const loginStore = new LoginStore();
export default loginStore;