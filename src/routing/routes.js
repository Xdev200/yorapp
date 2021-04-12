import { HOME,LOGIN,OTP,SIGNUP} from "./paths";
import {Home,LoginPage,OtpPage,SignUpPage} from '../Pages/index'

const HOME_ONE = {
  component: Home,
  path: HOME
};

const LOGIN_TWO ={
  component:LoginPage,
  path:LOGIN
}

const OTP_THREE ={
  component:OtpPage,
  path:OTP
}

const SIGNUP_FOUR ={
  component:SignUpPage,
  path:SIGNUP
}


const routes = [HOME_ONE,LOGIN_TWO,OTP_THREE,SIGNUP_FOUR];

export default routes;
