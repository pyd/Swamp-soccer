import {PlayerCardStat} from "./PlayerCardStat";

function PlayerCard(props) {
  return (
    <section className="card-container">
      <article className="card__front">
        <figure>
          <img className="general__img" src="./img/profilpicture.jpg" alt="" />
        </figure>
        <article className="card__front-text">
          <h2 className="card__front-position">Goalkeeper</h2>
          <ul className="card__front-stats">
            <PlayerCardStat actionName="Saved" actionValue="5" />
            <PlayerCardStat actionName="Dribble" actionValue="5" />
            <PlayerCardStat actionName="Tackle" actionValue="5" />
            <PlayerCardStat actionName="Assist" actionValue="5" />
            <PlayerCardStat actionName="Goal" actionValue="5" />
          </ul>
        </article>
      </article>

      <article className="card__back">
        <div className="card__back-name">
          <h3>Roger</h3>
          <h2>Cadri</h2>
        </div>

        <div className="card__back-infolist">
          <ul className="card__back-infolist-flex">
            <li>President</li>
            <li>45</li>
            <li>
              <div>Member since</div>
              <div>:</div>
              <div>5</div>
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt adipisci eaque soluta tempore numquam
              velit.
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export {PlayerCard};
