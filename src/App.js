import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Laboratorios from './pages/laboratorios';
import Laboratorio1 from './pages/Laboratorio1';
import Microprocesadores from './pages/Microprocesadores';
import Laboratorio2 from './pages/Laboratorio2';
import Laboratorio3 from './pages/Laboratorio3';
import Laboratorio4 from './pages/Laboratorio4';
import Laboratorio5 from './pages/Laboratorio5';
import Laboratorio6 from './pages/Laboratorio6';
import Header from './components/Navbar';

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
                    <Route path="/laboratorios" element={<Laboratorios />} />
                    <Route path="/laboratorio/1" element={<Laboratorio1 />} />
                    <Route path="/microprocesadores" element={<Microprocesadores />} />
                    <Route path="/laboratorio/2" element={<Laboratorio2 />} />
                    <Route path="/laboratorio/3" element={<Laboratorio3 />} />
                    <Route path="/laboratorio/4" element={<Laboratorio4 />} />
                    <Route path="/laboratorio/5" element={<Laboratorio5 />} />
                    <Route path="/laboratorio/6" element={<Laboratorio6 />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
