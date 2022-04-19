import React from 'react';
import InfoItem from '../components/Infos/InfoItem';
import InfoHours from '../components/Infos/InfoHours';
import InfoRules from '../components/Infos/InfoRules';


const Infos = () => {
    return (
        <div className="infos">

            <h3 className="infos--title">Infos Utiles</h3>

            <div className="infos__content">

                <InfoItem 
                    intro="Le principe est simple : on prend un terrain de 45 à 60 m X 26 à 40 m. On enlève le gazon et on y ajoute beaucoup d’eau… On obtient de la boue!"
                    img="https://cdn.shopify.com/s/files/1/0078/1808/4423/articles/swamp_soccer_foot_gadoue_1024x1024.jpg?v=1619065127"
                    description= "Premier tournoi en Finlande il y a 11 ans avec 13 équipes. Le concept est inspiré des skieurs de cross-country qui s’entraînent dans la boue l’été.
                    Aujourd’hui, plus de 200 équipes européennes jouent à ce sport…
                    Un tournoi a eu lieu du 20 au 22 juin 2008 à Dunoon en Écosse (Royaume-Uni). Le trophée du Championnat vaut 500 livres Sterling… Quelques règles du Swamp Soccer 3 types d’équipe qui ne jouent pas ensemble : hommes, femmes et mixtes 2 manches de 12 minutes 6 joueurs sur le terrain (inclus 1 gardien de but)
                    Tous les joueurs d’une même équipe doivent porter la même couleur de chandail." 
                />

                <InfoItem 
                    intro=" À l’image des plongeuses du football moderne, les joueurs de swamp soccer se jettent volontiers par terre.
                            À la seule différence qu’il s’agit de boue à la retombée et non d’une pelouse. Selon l’état du terrain, les joueurs peuvent facilement s’enfoncer jusqu’à 60 centimètres ! À ce jour, on ne compte plus les chaussures portées disparues."
                    img="https://s.yimg.com/bt/api/res/1.2/szQS25AdZVB6VNAQh3XlLw--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9Mzc3O2lsPXBsYW5lO3B4b2ZmPTUwO3B5b2ZmPTA7cT03NTt3PTY3MA--/http://media.zenfs.com/fr_FR/Sports/SoFoot/img-qui-veut-jouer-au-foot-de-boue-en-finlande-1437154041_x600_articles-alt-204807.jpg"
                    description= " Un match  se joue en deux mi-temps de douze minutes chacune, sur une surface de 30 mètres de large sur 60 de long. Une équipe est composée d’au moins cinq joueurs de champs et un gardien. Contrairement au football classique, faire tomber son adversaire est totalement autorisé au foot de boue, peu importe la manière. En revanche, quand un joueur fait mal à son adversaire, il doit embrasser l’endroit meurtri et jouer avec un sac sur la tête pendant une minute. Physiquement, les conditions de jeu sont très exigeantes, si bien que les changements sont illimités. Tout comme le football, un match nul se départage au tir au but."
                    
                />

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