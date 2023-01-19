import './App.css';
import GameScreen from './pages/GameScreen';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <main className='container'>
        <h1 className='d-flex justify-content-center mb-4 mt-2'>Number Jumble</h1>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gamescreen' element={ <GameScreen /> } />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
