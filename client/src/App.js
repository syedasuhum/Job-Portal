import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Provider } from 'react-redux';
import AllRoutes from "./component/AllRoutes"
import store from './Redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar/>
        <AllRoutes/>
      </Provider>
    </div>
  );
}

export default App;
