import React from "react";

export default function InfoHours(props) {
    return (
        <div className="info__item__detail info__item__detail--hours">
            <h4 className="info__item__detail--title">{props.title}</h4>
            <div className="info__item__detail--desc__content">
                <p className='info__item__detail--desc'>{props.description} </p>
            </div>
        </div>
    )
}