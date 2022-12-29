import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Usestate from './components/Usestate';
import UseEffect from './components/Useeffect';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Usecallback from './components/Usecallback';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/usestate" element={<Usestate />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/usecallback" element={<Usecallback />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;