import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactSection from './components/ContactSection';
import Furniture from './pages/Furniture';

function App() {

  return (
    <div className='global-style'>
      <HashRouter basename="/">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/furniture' element={<Furniture />} />
          <Route path='/contact' element={<ContactSection />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
