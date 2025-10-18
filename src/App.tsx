import './App.css'
import Header from './components/pages/Header';
import Home from './components/pages/Home'
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Element name='home'>
      <Header />
      <Home/>
      <Home/>
      </Element>
    </div>    
    )
}

export default App