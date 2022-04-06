function PlayerCard(props) {
  return (
    <section className="card-container">

      <article className="card__front">
        <figure>
          <img className="general__img" src="./img/profilpicture.jpg" alt="" />
        </figure>
        <article className="card__front-stats">
          <h2 className="card__front-position">Goalkeeper</h2>
          <ul>
            <li>shootSaved</li>
            <li>dribbling</li>
            <li>tackling</li>
            <li>assist</li>
            <li>goal</li>
          </ul>
        </article>
      </article>

      <article className="card__back">
        <h2 className="card__back-name">Roger</h2>
        <h3 className="card__back-lastname">Cadri</h3>
        <ul className="card__back-infolist">
          <li>President</li>
          <li>45</li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt adipisci eaque soluta tempore numquam
            velit.
          </li>
          <li></li>
        </ul>
      </article>
    </section>
  );
}

export {PlayerCard};
