import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from '../src/components/NavigationBar';
import HomePage from '../src/components/HomePage';
import Footer from '../src/components/Footer';
import RoomsPage from '../src/components/RoomsPage'; // Create this page
import AboutPage from '../src/components/AboutPage'; // Create this page
import ContactPage from '../src/components/ContactPage'; // Create this page
import BookingPage from '../src/components/BookingPage';
import Todo from '../src/components/Todo';
import Offers from '../src/components/Offers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dining from './components/Dining';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Home Page */}
        <Route path="/rooms" element={<RoomsPage />} />  {/* Rooms Page */}
        <Route path="/about" element={<AboutPage />} />  {/* About Us Page */}
        <Route path="/offers" element={<Offers />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/contact" element={<ContactPage />} />  {/* Contact Us Page */}
        <Route path="/todo" element={<Todo />} /> 
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
