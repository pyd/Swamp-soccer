import React from 'react';
import InfoItem from '../components/Infos/InfoItem';
import infosData from '../components/Infos/infosData';
import InfoHours from '../components/Infos/InfoHours';
import InfoRules from '../components/Infos/InfoRules';


const Infos = () => {

    const infoItemElements = infosData.map(infoItem => {
        return <InfoItem intro={infoItem.intro} img={infoItem.img} description={infoItem.description}/>
    })
    
    return (
        <div className="infos">

            <h3 className="infos--title">Infos Utiles</h3>

            <div className="infos__content">

                {infoItemElements}

                <InfoHours
                    title="Date et horaire"
                    description="La coupe du monde swamp soccer comme cette année
                    commence le 15 Juillet 2022 dans le marécage de Pölhövaara aux abords
                    de Hyrynsalmi, dans l'est de la Finlande."
                />

                <InfoRules
                    title="Règles du jeu"
                />

            </div>
        </div>
    );
};

export default Infos;