import {PlayerCard} from "./../components/PlayerCard.js";
import {membersData} from "./../components/DataMembers.js";

function Members() {
  const addMemberCard = membersData.map((cardparam) => {
    return <PlayerCard key={cardparam.id} cardparam={cardparam} />;
  });

  return (
    <>
      <section class="member-card-container-goal">
        <h2>GoalKeeper</h2>
        {addMemberCard}
      </section>
      <section class="member-card-container-attack">
        <h2>Attack</h2>
        {addMemberCard}
      </section>
      <section class="member-card-container-defense">
        <h2>Defense</h2>
        {addMemberCard}
      </section>
    </>
  );
}

export {Members};
