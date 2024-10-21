//import { useState } from 'react'
// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SignInScreen from './components/SignInScreen';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div className="App">
        <SignInScreen />
        <SearchBar />
        <Header />
      </div>
    </Router>
  );
}

export default App;
