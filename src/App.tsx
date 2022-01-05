import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <main className="font-mono">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
