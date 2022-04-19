import React from "react";

export default function InfoItem (props) {
    return (
        <div className='info__item'>
            <p className='info__item--desc'>{props.intro}</p>
            <img className="info__item--img" src={props.img} />
            <p className='info__item--desc'>{props.description}</p>
        </div>
    )
}