function PlayerCardStat(props) {
  return (
    <li>
      <div>{props.action}</div>
      <div>:</div>
      <div className="card__front-stats-num">{props.num}</div>
    </li>
  )
}

export {PlayerCardStat};
