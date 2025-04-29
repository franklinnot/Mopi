import { Routes, Route } from 'react-router';
import Home from './pages/home';
import About from './pages/about';

/**
 * Main application component that sets up routing.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  );
}
