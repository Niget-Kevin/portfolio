import { useParams } from 'react-router-dom';
import ErrorComponent from '../Error/Error';
import Slider from '../../Components/Slider/slider'; 
import { FaReact, FaSass, FaNodeJs, FaJs, FaHtml5, FaCss3 } from 'react-icons/fa'; // Ajout de FaJs
import reduxIcon from '../../Design/icon/redux.png';
import postmanIcon from '../../Design/icon/postman.png';
import './Achivement.scss';
import achivementData from '../../Data/projet.json';

const Achivement = () => {
    const { id } = useParams();
    const selectedAchivement = achivementData.find(achivement => achivement.id === id);
    const tagsWithSpaces = selectedAchivement.tag.join(' ');

    if (!selectedAchivement) {       
        return <ErrorComponent />;
    }

    return (
        <div id='achivement'>
            <h1 className='achivement_title'>{selectedAchivement.title}</h1>
            <section className='achivement'>
                <div className='achivement-slide'>  
                    <Slider images={selectedAchivement.pictures} />
                        <div className='achivement-content'>
                        <h2 className='achivement-content__title'>
                            {selectedAchivement.description[0].title}
                        </h2>
                        <p className='achivement-content__text'>
                            {selectedAchivement.description[1].text}
                        </p>
                    </div>
                    <div className='tools'>
                        <h3 className='tools-title'>Outil uiliser</h3>
                        <div className='tools-text'>
                            {tagsWithSpaces.includes("React") && (
                                <div className="icon-container">
                                    <FaReact className="react-icon" />
                                    <span className="icon-name">React</span>
                                </div>
                            )}
                            {tagsWithSpaces.includes("Sass") && (
                                <div className="icon-container">
                                    <FaSass className="sass-icon" />
                                    <span className="icon-name">Sass</span>
                                </div>
                            )}                            
                            {tagsWithSpaces.includes("NodeJS") && (
                                <div className="icon-container">
                                    <FaNodeJs className="node-icon" />
                                    <span className="icon-name">NodeJS</span>
                                </div>
                            )}
                            {tagsWithSpaces.includes("Redux") && (
                                <div className="icon-container">
                                    <img src={reduxIcon} alt="Redux" />
                                    <span className="icon-name">Redux</span>
                                </div>
                            )}
                            {tagsWithSpaces.includes("Postman") && (
                                <div className="icon-container">
                                    <img src={postmanIcon} alt="Postman" />
                                    <span className="icon-name">Postman</span>
                                </div>
                            )}
                            {tagsWithSpaces.includes("JavaScript") && (
                                <div className="icon-container">
                                    <FaJs className="icon-JavaScript" /> 
                                    <span className="icon-name">JavaScript</span>
                                </div>
                            )}
                            {tagsWithSpaces.includes("HTML") && (
                                <div className="icon-container">
                                    <FaHtml5 className="icon-html" /> 
                                    <span className="icon-name">HTML 5</span>
                                </div>
                            )}
                            {tagsWithSpaces.includes("CSS") && (
                                <div className="icon-container">
                                    <FaCss3 className="icon-css" /> 
                                    <span className="icon-name">CSS 3</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>                                   
        </div>
    ); 
}   

export default Achivement;
