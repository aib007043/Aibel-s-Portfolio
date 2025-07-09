import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AOS from 'aos';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
