import {MemberCard, NoResult} from "../components/Members/MemberCard.js";
import {MembersData} from "./../components/Members/DataMembers.js";
import Search from "../components/Members/Search";

import React from "react";

function Members() {
  //____________________________________________________________________
  //____________________________________________________________________
  //____________________________________________________________________
  // MAP FUNCTION
  function arrayMapOn(ComponnentName, arrayName) {
    return arrayName.map((cardparam) => {
      return <ComponnentName key={cardparam.id} cardparam={cardparam} />;
    });
  }
  // GOALKEEPER__________________________________________________
  const goalkeeperArray = MembersData.filter(function (position) {
    return (
      position.position.toLowerCase() === "gardien" ||
      position.position.toLowerCase() === "gardienne"
    );
  });
  const goalKeeperList = arrayMapOn(MemberCard, goalkeeperArray);

  // ATTACK__________________________________________________
  const attackArray = MembersData.filter(function (position) {
    return (
      position.position.toLowerCase().includes("milieu") ||
      position.position.toLowerCase().includes("centre") ||
      position.position.toLowerCase().includes("aillier")
    );
  });
  const attackArrayList = arrayMapOn(MemberCard, attackArray);

  // DEFENCE__________________________________________________
  const defenseArray = MembersData.filter(function (position) {
    return (
      position.position.toLowerCase().includes("arriere") ||
      position.position.toLowerCase().includes("defense")
    );
  });
  const defenseArrayList = arrayMapOn(MemberCard, defenseArray);

  //____________________________________________________________________
  //____________________________________________________________________
  //____________________________________________________________________
  // CSS CLASS MANAGEMENT

  const [cssClassSwitch, setCssClassSwitch] = React.useState({
    defaultDisplay: "display-auto-js",
    resultDisplay: "display-none-js",
    defaultAnime: "show-anime-default-js",
    resultAnime: "hide-result-anim-js",
  });

  // SET STATE FUNCTION_____________________
  function setStateFunc(cssClass, objProp) {
    setCssClassSwitch((prevCssClassSwitch) => {
      return {
        ...prevCssClassSwitch,
        [objProp]: cssClass,
      };
    });
  }

  // CSS CLASS MANAGEMENT
  function setDefaultScreen() {
    // DEFAULT_______________________
    setStateFunc("display-auto", "defaultDisplay");

    setTimeout(() => {
      setStateFunc("show-anime-default-js", "defaultAnime");
    }, 20);
    //RESULT_______________________
    setTimeout(() => {
      setStateFunc("hide-result-anim-js", "resultAnime");
    }, 20);
    setTimeout(() => {
      setStateFunc("display-none-js", "resultDisplay");
    }, 300);
  }

  function setResultScreen() {
    // DEFAULT_______________________
    setStateFunc("hide-anime-default-js", "defaultAnime");

    setTimeout(() => {
      setStateFunc("display-none-js", "defaultDisplay");
    }, 300);
    //RESULT_______________________
    setTimeout(() => {
      setStateFunc("show-result-anim-default-js", "resultAnime");
    }, 50);
    setTimeout(() => {
      setStateFunc("display-auto", "resultDisplay");
    }, 20);
  }

  //____________________________________________________________________
  //____________________________________________________________________
  //____________________________________________________________________
  // FORM

  const [searchState, setSearchState] = React.useState({searchName: ""});
  const [formBtnState, setFormBtnState] = React.useState([]);

  // FORM INPUT________________________________________
  function handleInputChange(event) {
    const {name, value} = event.target;
    setSearchState(() => {
      return {[name]: value.toLowerCase()};
    });
  }

  // FORM BUTTON________________________________________

  function memberFormBtn(event) {
    event.preventDefault();

    const filteredData = MembersData.filter(
      (memberItem) =>
        memberItem.name.toLowerCase().includes(searchState.searchName) ||
        memberItem.LastName.toLowerCase().includes(searchState.searchName) ||
        memberItem.role.toLowerCase().includes(searchState.searchName) ||
        memberItem.position.toLowerCase().includes(searchState.searchName)
    );

    setFormBtnState(() => {
      if (!searchState.searchName || filteredData.length === MembersData.length) {
        // need to be set first otherwise doesnt work !??
        setDefaultScreen();
        return [];
      }
      if (filteredData.length === 0) {
        setResultScreen();
        return <NoResult />;
      }
      if (filteredData.length > 0 || filteredData < 6) {
        setResultScreen();
        return arrayMapOn(MemberCard, filteredData);
      }
    });
  }

  //____________________________________________________________________
  //____________________________________________________________________
  //____________________________________________________________________

  return (
    <div className="members">
      <h4 className="members-title">Nos Membres</h4>
      {/* <Search /> */}

      <div className="mainContainer">
        <form className="form-member">
          <div>
            <label htmlFor="search"> Recherche de membre</label>
            <input
              id="search"
              className="inputSearch"
              type="text"
              name="searchName"
              onChange={handleInputChange}
              value={searchState.searchName}
            ></input>
          </div>
          <button className="form-button" onClick={memberFormBtn}>
            Ok
          </button>
        </form>
      </div>

      <div className="section-side-by-side">
        <section
          className={`member__position-container goal ${cssClassSwitch.defaultAnime} ${cssClassSwitch.defaultDisplay}`}
        >
          <h2 className="member__categorie-h2">Gardien(s)</h2>
          <div className={`member__cards-container `}>{goalKeeperList}</div>
        </section>

        <section
          className={`member__position-container result ${cssClassSwitch.resultAnime} ${cssClassSwitch.resultDisplay}`}
        >
          <h2 className="member__categorie-h2">Résultat :</h2>
          <div className={`member__cards-container `}>{formBtnState}</div>
        </section>
      </div>

      <section
        className={`member__position-container attack ${cssClassSwitch.defaultAnime} ${cssClassSwitch.defaultDisplay}`}
      >
        <h2 className="member__categorie-h2">L'Attaque</h2>
        <div className={`member__cards-container`}>{attackArrayList}</div>
      </section>

      <section
        className={`member__position-container defense ${cssClassSwitch.defaultAnime} ${cssClassSwitch.defaultDisplay}`}
      >
        <h2 className="member__categorie-h2">La Defense</h2>
        <div className="member__cards-container">{defenseArrayList}</div>
      </section>
    </div>
  );
}

export {Members};

// DO NOT WORK ????
// const classTest = onClickTest
//   ? setTimeout(() => {
//       setCssDisplayToggle("show-anime-default-js");
//     }, 20)
//   : setTimeout(() => {
//       setCssDisplayToggle("display-none-js");
//     }, 250);

// // ----------------------------
// const classTest2 = function () {
//   if (onClickTest) {
//     setTimeout(() => {
//       return setCssDisplayToggle("show-anime-default-js");
//     }, 20);
//   } else {
//     setTimeout(() => {
//       return setCssDisplayToggle("display-none-js");
//     }, 250);
//   }
// };
