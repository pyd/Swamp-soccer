import React from 'react';
import ImageSlider from '../components/Slider';

// npm install react-slick --save
// npm install slick-carousel, this is for css & font

const About = () => {
    return (
        <div className='about'>

            <div className='about__content'>

                <figure className='about__content--figure'>
                    <img src='./img/foot1.jpg' alt='foot1' />
                </figure>

                <div className='about__content__desc'>
                    <h4 className='about__content__desc--title'>Notre histoire </h4>
                    <h5 className='about__content__desc--subtitle'>Le « swamp soccer » : un sport bien boueux </h5>
                    <p className='about__content__desc--text'>
                        Si certains évitent de tacheter leurs maillots de football, d’autres préfèrent se

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

                    </p>
                </div>

            </div>



            <div className='about__gallery'>
                <h3 className='about__gallery--title'>Nos équipes</h3>
                <p className='about__gallery--text'>Faites glissez les images à droite ou à gauche. </p>

                <div className='about__gallery__content'>
                    <ImageSlider />

                </div>
            </div>

        </div>
    );
};
//effvfg

export default About;