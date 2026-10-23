import React from 'react';
import Header from './components/design/Header';
import Main from './components/design/Main';
import Footer from './components/design/Footer';
import './styles/styles.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
