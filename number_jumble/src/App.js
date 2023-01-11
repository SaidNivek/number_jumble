import './App.css';
import GameScreen from './pages/GameScreen';

function App() {
  return (
    <>
      <main className='container'>
        <h1 className='d-flex justify-content-center mb-4 mt-2'>Math Game</h1>
        <GameScreen />
      </main>
    </>
  );
}

export default App;
