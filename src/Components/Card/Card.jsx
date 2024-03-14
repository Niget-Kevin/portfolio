import { Link } from 'react-router-dom';
import "./Card.scss";

function Card({ id, title, img, alt}) {
    const handleClick = () => {
        window.scrollTo(0, 0);
    }

    return (
      <Link to={`/${id}`} onClick={handleClick}>
        <div className='card'>
          <div>
          <h3 className='card__title'>{title}</h3>
          <img src={img} alt={alt} className='card__image'/>              
          </div>      
        </div>
      </Link>
    )
}

export default Card;
