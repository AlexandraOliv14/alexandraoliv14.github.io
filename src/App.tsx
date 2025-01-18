
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './views/Home';
import { Layout } from './components/Layout';
import { About } from './views/About';
import { Portafolio } from './views/Portafolio';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About/>}/>
          <Route path='/portafolio' element={<Portafolio/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
