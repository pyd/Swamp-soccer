import React from 'react';

const Histoire = () => {
    return (
        <div className= 'general'>
            <h3 className='utile1'>HISTOIRE</h3>
            <div className='titre1'>
                <div className='photo1'>
                    <img src='./img/foot1.jpg' alt='foot1' />
                </div>
                <di className='histor'>
                    <h3 className='utile2'>Le « swamp soccer » : un sport bien boueux </h3>
                    <h4 className='histo'>Si certains évitent de tacheter leurs maillots de football, d’autres préfèrent se
                        jeter dans de la boue… Découvrons le « swamp soccer ».
                        Le « swamp soccer » ou « foot de boue » est une sorte de dérivée du football traditionnel
                        qui se jouedans la boue. Mais pourquoi se jetterait-on exprès dans
                        un marécage ? C’est qu’il y a forcément une raison qui se cache derrière.
                        Ce sport loufoque est né grâce aux skieurs finlandais. Ces derniers, devant s’entraîner même durant l’été,
                        optaient pour une piste en boue leur permettant de glisser aisément. Lors de ces entraînements,
                        ils s’amusaient à jouer au Football pendant la pause, et c’est de là qu’est venue l’idée du « foot de boue ».
                        C’est en 1998 que s’est tenue la première compétition de swamp soccer impliquant 13 équipes ;
                        et depuis 2000, la bataille pour le titre de champion du monde a eu lieu en Finlande.
                        Près de 200 équipes de différents pays participent aux compétitions.
                        Même si les règles de sport peuvent paraître un peu barbares, on y trouve tout de même un peu d’humanité
                        À la fin d’un match de swamp soccer, la tradition veut que les joueurs se jettent dans de l’eau glacée. De cette
                        manière, les Finlandais expriment : « après l’effort, le réconfort ». 
                    </h4>
                </di>
            </div><br />
            <div className='titre2'>
                <div>
                    <h3 className='utile2'>EQUIPES SWAMP SOCCER</h3>
                </div>
                <hr></hr>
                <div className='photo'>
                    <div className='galerie'>
                        <a> <img className='image' src='./img/foot2.jpg' alt='foot2' />
                            <span className='spa'>Une photo d'équipe du swamp soccer prise en 2018 lors d'un match</span> </a>
                    </div>
                    <div className='galerie'>
                        <a> <img className='image' src='./img/foot3.jpg' alt='foot3' />
                            <span className='spa'>Une photo d'équipe du swamp soccer prise en 2019 lors d'un match en Finlande</span></a>
                    </div>
                    <div className='galerie'>
                        <a> <img className='image' src='./img/foot4.jpg' alt='foot4' />
                            <span className='spa'>Une photo d'équipe du swamp soccer prise en été 2020 lors d'un match</span> </a>
                    </div>
                    <div className='galerie'>
                        <a> <img className='image' src='./img/foot5.jpg' alt='foot5' />
                            <span className='spa'>Une photo d'équipe du swamp soccer prise en 2021 lors d'un match dans 50cm de boue</span> </a>
                    </div>
                    <div className='galerie'>
                        <a> <img className='image' src='./img/f.webp' alt='foot6' />
                            <span className='spa'>Une photo d'équipe du swamp soccer prise en 2021 lors d'un match</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Histoire;