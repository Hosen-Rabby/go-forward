import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Authorization/Context/AuthProvider/AuthProvider';
import Register from './Pages/Log/Register/Register';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Navigation from './Pages/Shared/Navbar/Navigation';
import Login from './Pages/Log/Login/Login';

function App() {
  return (
    <AuthProvider>

      <Navigation />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;