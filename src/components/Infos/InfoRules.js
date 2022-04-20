import React from "react";
import { IoIosWarning, IoIosHourglass, IoIosFootball, IoMdMedal, IoIosMale, IoMdFemale, IoIosPlanet } from "react-icons/io";

export default function InfoRules(props) {
    return (
        <div className="info__item__detail info__item__detail--rules">
            <h4 className="info__item__detail--title">{props.title}</h4>
            <ul>
                <li><IoIosWarning className="infos--icons" /> Prudence - Vigilance</li>
                <li><IoIosHourglass className="infos--icons" /> Durée mi-temps : 15 min.</li>
                <li><IoIosFootball className="infos--icons" />Six joueurs par équipe dont le gardien.</li>
                <ul>
                    <li><IoMdMedal className="infos--icons" />Trois championnats différents :</li>
                    <li><IoIosMale className="infos--icons" />Homme - <IoMdFemale className="infos--icons" />Femme - <IoIosPlanet className="infos--icons" />Mixte</li>
                </ul>

            </ul>
        </div>
    )
}