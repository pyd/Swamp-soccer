import {PlayerCard} from "./../components/PlayerCard.js";
import {membersData} from "./../components/DataMembers.js";

function Members() {
  const addMemberCard = membersData.map((cardparam) => {
    return <PlayerCard key={cardparam.id} cardparam={cardparam} />;
  });

  const goalkeeperArray = membersData.filter(function (position) {
    return position.position == "Goalkeeper";
  });
  const goalKeeperList = goalkeeperArray.map((cardparam) => {
    return <PlayerCard key={cardparam.id} cardparam={cardparam} />;
  });

  const attackArray = membersData.filter(function (position) {
    return position.position.includes("fullStack") || 
    position.position.includes("Winger");
  });
  
  const defenseArray = membersData.filter(function (position) {
    return position.position.includes("back") || 
    position.position.includes("defensive");
  });


  return (
    <>
      <section className="member-card-container-goal">
        <h2>GoalKeeper</h2>
        {goalKeeperList}
      </section>
      <section className="member-card-container-attack">
        <h2>Attack</h2>
        {addMemberCard}
      </section>
      <section className="member-card-container-defense">
        <h2>Defense</h2>
        {addMemberCard}
      </section>
    </>
  );
}

export {Members};
