function PlayerCardStat(props) {
  return (
    <li>
      <div>{props.actionName}</div>
      <div>:</div>
      <div className="card__front-stats-num">{props.actionValue}</div>
    </li>
  )
}

export {PlayerCardStat};
