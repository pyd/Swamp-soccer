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
    return position.position === "Gardien";
  });
  const goalKeeperList = arrayMapOn(MemberCard, goalkeeperArray);

  // -------------------------------------------------------------
  const attackArray = MembersData.filter(function (position) {
    return position.position.includes("Milieu") || position.position.includes("Centre") || position.position.includes("Aillier");
  });
  const attackArrayList = arrayMapOn(MemberCard, attackArray);

  // -------------------------------------------------------------
  const defenseArray = MembersData.filter(function (position) {
    return position.position.includes("Arriere") || position.position.includes("Défenseur");
  });
  const defenseArrayList = arrayMapOn(MemberCard, defenseArray);

  // -------------------------------------------------------------


  return (
    <div >
      <section className="member__position-container goal">
        <h2 className="member__categorie-h2">Les Gardiens</h2>
        <div className="member__cards-container">{goalKeeperList}</div>
      </section>
      <section className="member__position-container attack">
        <h2 className="member__categorie-h2">Les Attaquants</h2>
        <div className="member__cards-container">{attackArrayList}</div>
      </section>
      <section className="member__position-container defense">
        <h2 className="member__categorie-h2">La Defence</h2>
        <div className="member__cards-container">{defenseArrayList}</div>
      </section>
    </div>
  );
}

export {Members};