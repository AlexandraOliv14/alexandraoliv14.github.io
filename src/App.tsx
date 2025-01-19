
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Home, About, Portafolio } from './views';
import { Layout } from './navigation';


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
