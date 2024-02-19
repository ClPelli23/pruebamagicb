import './Card.css'
import SeniorMascAFoto from '../../assets/teams/senmasca.jpg'
import SeniorFemFoto from '../../assets/teams/senfema.jpg'

function Card()
{
    return (
    <div className='Card'>
      
          <h1>
          Senior A Masculí
          </h1>
          <div className="SeniorAM-Card">
          <img src={SeniorMascAFoto} />
          <p>Lorem eiruywiruyewas kajshdkah ksjkljhhs hjskalkjsh lñlkaj </p>
          <a target="_blank" href="https://www.fcf.cat/resultats/2324/futbol-sala/lliga-primera-divisio-catalana-futbol-sala/bcn-gr-2" rel="noreferrer">Competició</a>
      </div>
      
      
      
    
      
      <div className='SeniorAF-Card'>
      <img src={SeniorFemFoto} />
        <h2>Senior Femení</h2>
        <p>Aplicación de escritorio de Lorem ksjahdkhs dlakjshda lkasjdha sld askdjha dlaksjdh</p>
        <a target="_blank" href="https://www.fcf.cat/resultats/2324/futbol-sala/lliga-primera-divisio-catalana-futbol-sala/bcn-gr-2" rel="noreferrer">Competició</a>

      </div>
      
      <div className='SeniorB-Card'>
        <h2>Senior B Masculí</h2>
        <p>Aplicación de escritorio de Gestion de equipo deportivo</p>
        <a target="_blank" href="https://www.fcf.cat/resultats/2324/futbol-sala/lliga-primera-divisio-catalana-futbol-sala/bcn-gr-2" rel="noreferrer">Competició</a>

      </div>

      <div className='SeniorC-Card'>
        <h2>Senior C Masculí</h2>
        <p>Aplicación de escritorio de Gestion de equipo deportivo</p>
        <a target="_blank" href="https://www.fcf.cat/resultats/2324/futbol-sala/lliga-primera-divisio-catalana-futbol-sala/bcn-gr-2" rel="noreferrer">Competició</a>

      </div>
    </div>);
 }



  
export default Card