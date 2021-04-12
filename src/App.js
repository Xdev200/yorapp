import './styles/App.css';
import Header from  './components/Header/Header'
import Banner from './components/Banner/Banner'
import Search from './components/Search/Search'
import Yostd from './components/Yostd/Yostd'
import Offers from './components/Offers/Offers'
import Login from './components/Login/Login'

const App=()=> {
  return (
    <div className="app">
      <Header/>
      <Banner/>
      <Search/>
      <Yostd/>
      <Offers/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
