// import fotoYo from '../../assets/p2KrZVjb_400x400.jpg'
import './MainContent.css'
import ImageCarousel from './ImageCarousel';

function MainContent () {
    return(
    <main className="main">
            
            <div className="info">
              {/* <h2 className="subtitle">...Subtittle</h2> */}
              <h1 className="main-title"> La nostra <span>passió</span> no depèn de <span> victòries</span>!</h1>
              {/* <h3 className="subtitle">Club de futbol sala del barri de Sants</h3>
              <p className="first-description">Senior A, Senior B. Sapiente obcaecati ad adipisci, voluptatibus similique magnam dignissimos sint excepturi nisi, cupiditate iusto!</p> */}
            </div>
            <div className='fotoPortada'>
            <ImageCarousel />
            </div>
      </main>
      );
}

export default MainContent;