import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
