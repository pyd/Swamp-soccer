import React from 'react';

const Infos = () => {
    return (
        <div className="infos">
            
            <div className="infos__content">
                <h3 className="infos__content--title">Infos Utiles</h3>

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

            <div className='info__item__detail'>
                <h4 className="info__item__detail--title">Date et horaire</h4>
                <p className='info__item__detail--desc'>
                    La coupe du monde swamp soccer comme cette année commence
                    le 15 Juillet 2022  dans le marécage de Pölhövaara aux abords
                    de Hyrynsalmi, dans l'est de la Finlande.
                </p>
                <h4 className="info__item__detail--subtitle">Regle du jeu</h4>
                <ul>
                    <li>Prudence</li>
                    <li>Vigilance</li>
                    <li>Mi-temps dure 15min</li>
                    <li>Six joueurs par équipe dont le gardien</li>
                    <li>Trois différents championnat ; pour le hommes, les dames et les mixtes</li>
                </ul>

                <p className='info__item__detail--end'> NOUS VOUS INVITONS À SUIVRE TOUTES LES ACTUALITES SUR SWAMP SOCCER !</p>
            </div>

        </div>
    );
};

export default Infos;