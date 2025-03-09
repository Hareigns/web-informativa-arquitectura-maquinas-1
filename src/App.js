import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Header from './components/header';
import Footer from './components/footer';

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
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="container-footer">
          <Footer />
        </div>

      </div>

    </Router>
  );
}

export default App;