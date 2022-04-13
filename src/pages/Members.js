import {MemberCard} from "../components/MemberCard.js";
import {MembersData} from "./../components/DataMembers.js";

function Members() {

   // -------------------------------------------------------------
   // MAP FUNCTION
   // Need define the "cardparam" & "id" in there.
   // better way to do this ?
  function arrayMapOn(ComponnentName, arrayName) {
    return arrayName.map((cardparam) => {
      return <ComponnentName key={cardparam.id} cardparam={cardparam} />;
    });
  }
  // -------------------------------------------------------------
  const goalkeeperArray = MembersData.filter(function (position) {
    return position.position === "Goalkeeper";
  });
  const goalKeeperList = arrayMapOn(MemberCard, goalkeeperArray);

  // -------------------------------------------------------------
  const attackArray = MembersData.filter(function (position) {
    return position.position.includes("Central") || position.position.includes("Winger");
  });
  const attackArrayList = arrayMapOn(MemberCard, attackArray);

  // -------------------------------------------------------------
  const defenseArray = MembersData.filter(function (position) {
    return position.position.includes("Back") || position.position.includes("Defensive");
  });
  const defenseArrayList = arrayMapOn(MemberCard, defenseArray);

  // -------------------------------------------------------------


  return (
    <div >
      <section className="member__position-container-goal">
        <h2 className="member__categorie-h2">GoalKeeper</h2>
        <div className="member__cards-container">{goalKeeperList}</div>
      </section>
      <section className="member__position-container-attack">
        <h2 className="member__categorie-h2">Attack</h2>
        <div className="member__cards-container">{attackArrayList}</div>
      </section>
      <section className="member__position-container-defense">
        <h2 className="member__categorie-h2">Defense</h2>
        <div className="member__cards-container">{defenseArrayList}</div>
      </section>
    </div>
  );
}

export {Members};
