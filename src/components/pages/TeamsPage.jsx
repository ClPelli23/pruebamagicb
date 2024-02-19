import './TeamsPage.css'
import Card from '../Cards/Card.jsx'

function TeamsPage () {
    return (
      <div className="teamPage">
        <div className='PFTitle'>
        <h1>EQUIPS</h1>
        </div>
        <div className="teamCards-container">
        <Card />
        </div>
      </div>
    );
  }

  export default TeamsPage;