import { Link } from 'react-router-dom';
import "./Card.scss";

function Card({ id, title, img}) {
    const handleClick = () => {
        window.scrollTo(0, 0); // Déplacer la page vers le haut sans transition fluide
    }

    return (
      <Link to={`/Achivement/${id}`} onClick={handleClick}>
        <div className='card'>
          <div>
          <h3 className='card__title'>{title}</h3>
          <img src={img} alt={title} className='card__image'/>              
          </div>      
        </div>
      </Link>
    )
}

export default Card;
