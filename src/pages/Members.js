import {PlayerCard} from "../components/MemberCard.js";
import {membersData} from "./../components/DataMembers.js";

function Members() {
  const addMemberCard = membersData.map((cardparam) => {
    return <PlayerCard key={cardparam.id} cardparam={cardparam} />;
  });

  // -------------------------------------------------------------
  const goalkeeperArray = membersData.filter(function (position) {
    return position.position == "Goalkeeper";
  });
  const goalKeeperList = goalkeeperArray.map((cardparam) => {
    return <PlayerCard key={cardparam.id} cardparam={cardparam} />;
  });

  // -------------------------------------------------------------
  const attackArray = membersData.filter(function (position) {
    return position.position.includes("Central") || position.position.includes("Winger");
  });
  const attackArrayList = attackArray.map((cardparam) => {
    return <PlayerCard key={cardparam.id} cardparam={cardparam} />;
  });

  // -------------------------------------------------------------
  const defenseArray = membersData.filter(function (position) {
    return position.position.includes("Back") || position.position.includes("Defensive");
  });
  const defenseArrayList = defenseArray.map((cardparam) => {
    return <PlayerCard key={cardparam.id} cardparam={cardparam} />;
  });

  return (
    <>
      <section className="member-card-container-goal">
        <h2>GoalKeeper</h2>
        {goalKeeperList}
      </section>
      <section className="member-card-container-attack">
        <h2>Attack</h2>
        {attackArrayList}
      </section>
      <section className="member-card-container-defense">
        <h2>Defense</h2>
        {defenseArrayList}
      </section>
    </>
  );
}

export {Members};
