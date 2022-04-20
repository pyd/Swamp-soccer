import React from "react";

export default function PartnerItem (props) {
    return (
        <div className="partner--col">
        <img {...props.icon} className="icon"/>
        <p>{props.partner}</p>
    </div>
    )
}