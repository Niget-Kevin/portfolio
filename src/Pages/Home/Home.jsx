
import Card from '../../Components/Card/Card';
import data from '../../Data/projet.json';
import './Home.scss';


function Home() {
    return (
        <div id='home'>
            <div className='home_header'>
                {/* <img src="/Design/backgroud/background-home.jpg" alt="" /> */}
                <h1 className='home-text'>Niget Kevin <hr className='home-divider'/> développeur Web Frontend</h1>
            </div>

            <section id='profile'>
                <h2 className='profile-title'>Présentation</h2>                
                <div className='profile-content'>     
                   {/*  <img src="/Design/images/moi2.png" alt="test" className='profil-content-img'/>   */}     
                    <div className='profile-content__text'>
                        <p>Tout au long de mon parcours professionnel, j’ai toujours été attiré par les opportunités et les défis qui me passionnent.</p>
                        <p>C’est pourquoi je suis enthousiaste à l’idée d’avoir un impact significatif au sein d’une entreprise en pleine croissance.</p>
                        <p>Mon expérience variée, allant du métier de carrossier à celui de déménageur, en passant par livreur, électricien, technicien fibre, chef de chantier et aide conducteur de travaux, m’a permis d’acquérir une compréhension approfondie de différents domaines.</p>
                        <p>En tant que développeur Front-end, j’apprécie utiliser mon attention aux détails, mon amour pour la création et mon éthique de travail axée sur la mission.</p>
                    </div>            
                </div>
            </section>

            <section id="portfolio">                
                <h2 className="portfolio-title">Mes réalisations</h2>                
                <div >
                    <p className="portfolio-subtitle">
                    Voici quelques-uns des projets que j'ai réalisés jusqu'à présent
                    </p> 
                    <div className='collection'>
                        {data.map(data => {
                            return (
                            <Card
                                key={data.id} 
                                id={data.id} 
                                title={data.title} 
                                img={data.img} 
                            />
                            )
                        })}
                    </div>                                  
                </div>
            </section> 
                                    
        </div>
    );
}

export default Home;
