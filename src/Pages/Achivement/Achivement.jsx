
import { useParams } from 'react-router-dom';
import ErrorComponent from '../Error/Error';
import './Achivement.scss';
import achivementData from '../../Data/achivements.json';

const Achivement = () => {
    const { id } = useParams();
    const selectedAchivement = achivementData.find(achivement => achivement.id === id);

    if (!achivementData) {       
        return <ErrorComponent />;
    }
    

    return (
        
        <div id='achivement'>
            <h1 className='achivement_title'>{selectedAchivement.title}</h1>
            <section id='profile'>
                <h2 className='profile-title'></h2>
                <div className='profile-content'>                    
                    <p className='profile-content__text'>
                        {selectedAchivement.comment}
                    </p>
                </div>
            </section>
            <section id="portfolio">                
                <h2 className="portfolio-title"></h2>                
                <div className='collection'>
            
                </div>
                <p className="ocr-legend">
                    {selectedAchivement.legend}
                </p>               
            </section>                                     
        </div>
    ); 
}

export default Achivement;
