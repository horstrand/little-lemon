import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sites/Home';
import About from './sites/About';
import Menu from './sites/Menu';
import Reservation from './sites/Reservation';
import Order from './sites/Order';
import Login from './sites/Login';
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";

function App() {
  return (
    <>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservation" element={<AlertProvider><Reservation/></AlertProvider> } />
              <Route path="/order" element={<Order />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </BrowserRouter>
    </>
  );
}

export default App;
