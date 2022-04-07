import {MemberCard} from "../components/MemberCard.js";
import {MembersData} from "./../components/DataMembers.js";

function Members() {
  // -------------------------------------------------------------
  const goalkeeperArray = MembersData.filter(function (position) {
    return position.position === "Goalkeeper";
  });
  const goalKeeperList = goalkeeperArray.map((cardparam) => {
    return <MemberCard key={cardparam.id} cardparam={cardparam} />;
  });

  // -------------------------------------------------------------
  const attackArray = MembersData.filter(function (position) {
    return position.position.includes("Central") || position.position.includes("Winger");
  });
  const attackArrayList = attackArray.map((cardparam) => {
    return <MemberCard key={cardparam.id} cardparam={cardparam} />;
  });

  // -------------------------------------------------------------
  const defenseArray = MembersData.filter(function (position) {
    return position.position.includes("Back") || position.position.includes("Defensive");
  });
  const defenseArrayList = defenseArray.map((cardparam) => {
    return <MemberCard key={cardparam.id} cardparam={cardparam} />;
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
