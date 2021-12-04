import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;