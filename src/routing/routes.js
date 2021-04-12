import { HOME,LOGIN} from "./paths";
import {Home,LoginPage} from '../Pages/index'

const HOME_ONE = {
  component: Home,
  path: HOME,
};

const LOGIN_TWO ={
  component:LoginPage,
  path:LOGIN
}

const routes = [HOME_ONE,LOGIN_TWO];

export default routes;
