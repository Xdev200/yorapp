import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./routing/routes";
const App = () => {
  return (
    <div className="app">
      <Routes>
        {routes.map((route, key) => (
          <Route path={route.path} element={<route.component />} key={key} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
