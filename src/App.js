import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

// import './App.css';

function App() {
  const [categories] = useState([
    {name: 'front', description: 'Exclusively Front End Projects'},
    { name: 'back', description: 'Exclusively Back End Projects'},
    { name: 'full', description: 'Front and Back End Projects'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Contact':
        return <ContactForm />;
      case 'Front':
        return <Projects currentCategory={categories[0]}></Projects>
      case 'Back':
        return <Projects currentCategory={categories[1]}></Projects>
      case 'Full':
        return <Projects currentCategory={categories[2]}></Projects>
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };
  
  return (
    <div className="page-container">
      <Nav
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        currentPage={currentPage} 
        handlePageChange={handlePageChange} 
      ></Nav>
      <main>

        <div>{renderPage(currentPage)}</div>

      </main>
      <Footer />
    </div>
  );
}

export default App;
