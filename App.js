import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Login/> */}
      {/* <Signin/> */}
      { <Routes>
      <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={ <Signin/>}/>
</Routes> }

    </div>
  );
}

export default App;
