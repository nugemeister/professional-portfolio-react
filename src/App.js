import { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Main from './components/Main';
import Header from './components/Header';
import Navigation from './components/Nav';
import Footer from './components/Footer';


function App() {
  const [ currentPage, setCurrentPage ] = useState( 'about' );

  const renderPage = () => {
      if ( currentPage === 'aboutMe' ) return <AboutMe />;
      if ( currentPage === 'portfolio' ) return <Portfolio />;
      if ( currentPage === 'contact' ) return <Contact />;
      if ( currentPage === 'resume' ) return <Resume />;
      
  }

  const changePage = ( page ) => setCurrentPage( page );

  return (
      <>
          <Header />
          <Navigation  currentPage={ currentPage } changePage={ changePage } />
          <Main renderPage={ renderPage } />
          <Footer />
      </>
  )
  
}

export default App;
