import React from 'react';

const InfosContenu = () => {
    return (
        <div className='infoContenu__container'>
            <h3>Infos Utiles</h3>
            <div className='annonce'>
                <p className='descrip'>La Finlande organise en tous les ans à la mi-juillet la Coupe 
                 du monde de football dans la boue (swamp soccer). Le tournoi
                 se dispute dans le marécage de Pölhövaara aux abords de Hyrynsalmi,
                  dans l'est de la Finlande.<br></br>
                  We have organised Swamp Soccer exhibition games and adverts for BBC Breakfast News,
                 FRijj (Muller), Soccer AM, Sony Pictures Home Entertainment, ITV News, 
                 Sky News, FIFA Futbol Mundial, Blue Peter, The New Paul O’Grady Show,
                  Rory and Paddy’s Great British Adventure, CNN News, A League of Their Own
                   (delayed due to the pandemic), and many, many more. For a few visual
                    examples, please see the Videos page.
                </p>
                <img src='./f.webp' alt='imag1' />
            </div><br></br>
            <div className='annonce'>
               <img src='./f1.jpg' alt='imag1' />
                <p className='descrip'>La Finlande organise en tous les ans à la mi-juillet la Coupe 
                 du monde de football dans la boue (swamp soccer). Le tournoi
                 se dispute dans le marécage de Pölhövaara aux abords de Hyrynsalmi,
                  dans l'est de la Finlande.<br></br>
                  We have organised Swamp Soccer exhibition games and adverts for BBC Breakfast News,
                 FRijj (Muller), Soccer AM, Sony Pictures Home Entertainment, ITV News, 
                 Sky News, FIFA Futbol Mundial, Blue Peter, The New Paul O’Grady Show,
                  Rory and Paddy’s Great British Adventure, CNN News, A League of Their Own
                   (delayed due to the pandemic), and many, many more. For a few visual
                    examples, please see the Videos page.
                </p>
                
            </div>
            <div className='detail'>
                <h4>DATE ET HORAIRE</h4>
                <p>La coupe du monde swamp soccer comme cette année commence
                  le 15 Juillet 2022  dans le marécage de Pölhövaara aux abords 
                  de Hyrynsalmi, dans l'est de la Finlande.
                </p><br/><br/><br/>
                <h4>REGLE DU JEUX</h4>
                <ul>
                    <p>Prudence</p>
                    <p>Vigilance</p>
                    <p>Mi-temps dure 15min</p>
                    <p>Six joueurs par équipe dont le gardien</p>
                    <p>Trois différents championnat ; pour le hommes, les dames et les mixtes</p>
                </ul>

                <h1 className='conclu'> NOUS VOUS INVITONS À SUIVRE TOUTES LES ACTUALITES SUR SWAMP SOCCER !</h1>

            </div>

            
        </div>
    );
};

export default InfosContenu;