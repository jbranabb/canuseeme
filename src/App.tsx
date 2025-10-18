import './App.css'
import Header from './components/ui/Header';
import Home from './components/treeroot/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    )
}

export default App