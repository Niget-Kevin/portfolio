import { Link } from 'react-router-dom';
import "./Card.scss"

function Card({ id, title, img}) {

    return (
      <Link to={`/Achivement/${id}` }>
        <div className='card'>
          <div>
          <h3 className='card__title'>{title}</h3>
          <img src={img} alt={title} className='card__image'/>              
          </div>      
        </div>
      </Link>
    )
  }
  
  export default Card