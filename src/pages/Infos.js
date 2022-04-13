import React from 'react';

const Infos = () => {
    return (
        <div className="infos">

            <h3 className="infos--title">Infos Utiles</h3>

            <div className="infos__content">

                <div className='info__item'>
                    <p className='info__item--desc'>
                        La Finlande organise en tous les ans à la mi-juillet la Coupe
                        du monde de football dans la boue (swamp soccer). Le tournoi
                        se dispute dans le marécage de Pölhövaara aux abords de Hyrynsalmi,
                        dans l'est de la Finlande.
                    </p>
                    <p className='info__item--desc'>
                        We have organised Swamp Soccer exhibition games and adverts for BBC Breakfast News,
                        FRijj (Muller), Soccer AM, Sony Pictures Home Entertainment, ITV News,
                        Sky News, FIFA Futbol Mundial, Blue Peter, The New Paul O’Grady Show,
                        Rory and Paddy’s Great British Adventure, CNN News, A League of Their Own
                        (delayed due to the pandemic), and many, many more. For a few visual
                        examples, please see the Videos page.
                    </p>
                    <img className="info__item--img" src='./f.webp' alt='imag1' />
                </div>


                <div className='info__item'>
                    <img className="info__item--img" src='./f1.jpg' alt='imag1' />
                    <p className='info__item--desc'>
                        La Finlande organise en tous les ans à la mi-juillet la Coupe
                        du monde de football dans la boue (swamp soccer). Le tournoi
                        se dispute dans le marécage de Pölhövaara aux abords de Hyrynsalmi,
                        dans l'est de la Finlande.
                    </p>
                    <p className='info__item--desc'>
                        We have organised Swamp Soccer exhibition games and adverts for BBC Breakfast News,
                        FRijj (Muller), Soccer AM, Sony Pictures Home Entertainment, ITV News,
                        Sky News, FIFA Futbol Mundial, Blue Peter, The New Paul O’Grady Show,
                        Rory and Paddy’s Great British Adventure, CNN News, A League of Their Own
                        (delayed due to the pandemic), and many, many more. For a few visual
                        examples, please see the Videos page.
                    </p>
                </div>



                <div className='info__item__content__detail'>
                    <div className="info__item__detail">
                        <h4 className="info__item__detail--title">Date et horaire</h4>
                        <div className="info__item__detail--desc__content">
                            <p className='info__item__detail--desc'>
                                La coupe du monde swamp soccer comme cette année
                                commence le 15 Juillet 2022 dans le marécage de Pölhövaara aux abords
                                de Hyrynsalmi, dans l'est de la Finlande.
                            </p>
                        </div>
                    </div>


                    <div className="info__item__detail">
                        <h4 className="info__item__detail--title">Regles du jeu</h4>
                        <ul className="info__item__detail--rules">
                            <li>Prudence - Vigilance</li>
                            <li>Durée mi-temps : 15min</li>
                            <li>Six joueurs par équipe dont le gardien.</li>
                            <ul className="info__item__detail--rules--championship">
                                <li>Trois championnats différents :</li>
                                <li>Hommes</li>
                                <li>Femmes</li>
                                <li>Mixtes</li>
                            </ul>
    
                        </ul>
                    </div>

                    <div className="info__item__detail">
                        <p className='info__item__detail--end'>
                            Nous vons invitons à suivre toutes nos actus !
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Infos;