import './App.css'
import logoMenu from './assets/menuLogo.svg'
import Header from './components/Header/Header.jsx'
import MainContent from './components/Main/MainContent.jsx'
import AboutPage from './components/pages/AboutPage.jsx'
import TeamsPage from './components/pages/TeamsPage.jsx'
import NoticePage from './components/pages/NoticePage.jsx'
// import Formulario from './components/forms/formulario.jsx'
import ContactPage from './components/pages/ContactPage.jsx'



/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */


function App() {

  return (
    <div className='App'>

      <div className='Headline-container'>
        <MainContent /><Header />
      </div>
      <div className='pgsMenu'>
        
        
        
        
            <img src={logoMenu} className='logoMenu'></img> 
      </div>
      <hr></hr>
      <hr></hr>
      <div className='paginas'>
        <div id="aboutPage">
        <br />
        <AboutPage /> 
        </div>
        <hr></hr>
        <hr></hr>
        <div id="teamsPage">
        <br />
        <TeamsPage />
        </div>
        <hr></hr>
        <div id="noticePage">
        <br />
        <NoticePage />
        </div> 
        <hr></hr>
        <div id="contactPage">
          <br />
          <ContactPage />
        </div>
        <hr></hr>
      </div>
        
      
      {/* <div className='logos-container'>
          <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
      </div> */}

      {/* <div className='titles-container'>
        <h2 className="subtitle">Hey there,</h2>
        <h1 className="main-title"> I'm Claudia Pellicer </h1>
        <h2 className="subtitle">Fullstack Developer</h2>
      </div> */}

      {/* <div className='image-container'>
        
      </div> */}

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Download my CV!!
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App
