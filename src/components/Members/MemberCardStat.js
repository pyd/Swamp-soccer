function MemberCardStat(props) {
  return (
    <li>
      <div className="card__front-action">{props.actionName}</div>
      <div>:</div>
      <div className="card__front-stats-num">{props.actionValue}</div>
    </li>
  )
}

export {MemberCardStat};
