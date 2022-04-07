import {PlayerCardStat} from "./PlayerCardStat";

function PlayerCard(props) {
  return (
    <section className="card-container">
      <article className="card__front">
        <figure>
          <img className="general__img" src="./img/profilpicture.jpg" alt="" />
        </figure>
        <article className="card__front-text">
          <h2 className="card__front-position">{props.cardparam.position}</h2>
          <ul className="card__front-stats">
            <PlayerCardStat actionName="Saved" actionValue={props.cardparam.shootSaved} />
            <PlayerCardStat actionName="Dribble" actionValue={props.cardparam.dribbling} />
            <PlayerCardStat actionName="Tackle" actionValue={props.cardparam.tackling} />
            <PlayerCardStat actionName="Assist" actionValue={props.cardparam.assist} />
            <PlayerCardStat actionName="Goal" actionValue={props.cardparam.goal} />
          </ul>
        </article>
      </article>

      <article className="card__back">
        <div className="card__back-name">
          <h3>{props.cardparam.name}</h3>
          <h2>{props.cardparam.LastName}</h2>
        </div>

        <div className="card__back-infolist">
          <ul className="card__back-infolist-flex">
            <li>{props.cardparam.role}</li>
            <li>{props.cardparam.age}</li>
            <li>
              <div>Member since</div>
              <div>:</div>
              <div>{props.cardparam.memberSince}</div>
            </li>
            <li>
              {props.cardparam.aboutMe}
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export {PlayerCard};