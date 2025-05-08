import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Laboratorios from './pages/laboratorios';
import Laboratorio1 from './pages/lab1/Laboratorio1';
import Microprocesadores from './pages/lab1/Microprocesadores';
import Laboratorio2 from './pages/lab2/Laboratorio2';
import ProcesosOrdenadosDesordenados from './pages/lab2/ProcesosOrdenadosDesordenados'; // importa el nuevo componente
import Laboratorio3 from './pages/lab3/Laboratorio3';
import Laboratorio4 from './pages/lab4/Laboratorio4';
import InfografiaEnsamblador from './pages/lab4/InfografiaEnsamblador'; // Nueva importación
import FuncionalidadComparacionProcesadores from './pages/lab3/FuncionalidadComparacionProcesadores'; // Nueva importación
import Laboratorio5 from './pages/lab5/Laboratorio5';
import Laboratorio6 from './pages/lab6/Laboratorio6';
import Laboratorio7 from './pages/lab7/Laboratorio7';
import Laboratorio8 from './pages/lab8/Laboratorio8';
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
                    <Route path="/lab1/microprocesadores" element={<Microprocesadores />} />
                    <Route path="/laboratorio/2" element={<Laboratorio2 />} /> 
                    <Route path="/lab2/procesosordenadosdesordenados" element={<ProcesosOrdenadosDesordenados />} />
                    <Route path="/laboratorio/3" element={<Laboratorio3 />} />
                    <Route path="/lab3/funcionalidad-comparacion" element={<FuncionalidadComparacionProcesadores />} />
                    <Route path="/laboratorio/4" element={<Laboratorio4 />} />
                    <Route path="/lab4/infografia-ensamblador" element={<InfografiaEnsamblador />} />
                    <Route path="/laboratorio/5" element={<Laboratorio5 />} />
                    <Route path="/laboratorio/6" element={<Laboratorio6 />} />
                    <Route path="/laboratorio/7" element={<Laboratorio7 />} />
                    <Route path="/laboratorio/8" element={<Laboratorio8 />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;