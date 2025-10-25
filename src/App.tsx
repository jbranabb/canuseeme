import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/treeroot/Home';
import Work from './components/treeroot/Work';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App