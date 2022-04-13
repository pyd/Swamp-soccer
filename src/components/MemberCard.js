import React from "react";
import {MemberCardStat} from "./MemberCardStat";
import {IoArrowUndoCircle} from "react-icons/io5";

function MemberCard(props) {


  const [cardRotate, setCardRotate] = React.useState(false)

  function cardButton() {
    setCardRotate((prevCardRotate) => !prevCardRotate)
  }
  const setRotateClass = cardRotate ? "card-container js-rotation" : "card-container";



  function touchStartTest(e) {
    console.log("TouchStart");
  }
 
  function touchEndTest() {
    console.log("TouchEnd");

    
  }

  return (
    <section className={setRotateClass}  onTouchStart={touchStartTest} onTouchEnd={touchEndTest} >

      <article className="card__front">

      <IoArrowUndoCircle onClick={cardButton} className="card-icon icon-front" />
      
        <figure>
          <img className="general__img" src="./img/profilpicture.jpg" alt="" />
        </figure>
        <article className="card__front-text">
          <h2 className="card__front-position">{props.cardparam.position}</h2>
          <ul className="card__front-stats">
            <MemberCardStat actionName="Saved" actionValue={props.cardparam.stats.shootSaved} />
            <MemberCardStat actionName="Dribble" actionValue={props.cardparam.stats.dribbling} />
            <MemberCardStat actionName="Tackle" actionValue={props.cardparam.stats.tackling} />
            <MemberCardStat actionName="Assist" actionValue={props.cardparam.stats.assist} />
            <MemberCardStat actionName="Goal" actionValue={props.cardparam.stats.goal} />
          </ul>
        </article>
      </article>

      <article className="card__back">

        <IoArrowUndoCircle onClick={cardButton} class="card-icon icon-back" />

        <div className="card__back-name">
          <h3>{props.cardparam.name}</h3>
          <h2>{props.cardparam.LastName}</h2>
        </div>

        <div className="card__back-infolist">
          <ul className="card__back-infolist-flex">
            <li>{props.cardparam.role}</li>
            <li>{props.cardparam.age} yo</li>
            <li>
              <div>Member since</div>
              <div>:</div>
              <div>{props.cardparam.memberSince} years</div>
            </li>
            <li>{props.cardparam.aboutMe}</li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export {MemberCard};
