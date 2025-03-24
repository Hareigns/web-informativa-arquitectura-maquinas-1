import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Laboratorios from './pages/laboratorios';
import Header from './components/Navbar'; // ✅ Usa 'Header' en lugar de 'Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-header">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Laboratorios" element={<Laboratorios />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
