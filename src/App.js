import './styles/App.css';
import {Home} from './Pages/index'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import routes from "./routing/routes";
const App=()=> {
  return (
    <div className="app">
   
     <Routes>
     <Home/>
        {routes.map((route, key) => (
          <Route path={route.path} element={<route.component />} key={key} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
