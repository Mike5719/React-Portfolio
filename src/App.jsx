// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

export default function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className='container'>
      <div className='header'>
        <Header />
      </div>
      <Outlet />
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};