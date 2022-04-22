import React, { useState } from "react";
import { MembersData } from "../Members/DataMembers";


export default function Search() {

    const [search, setSearch] = useState("");

    const [searchResult, setSearchResult] = useState([]);

    const updateSearch = (e) => {
        setSearch(e.target.value);
    }


    function handleClick(e) {
        e.preventDefault()


        const result = MembersData.filter(member => member.name.toLowerCase().includes(search.toLowerCase()) || member.LastName.toLowerCase().includes(search))
        setSearchResult(result);
        console.log(searchResult)
    }



    return (
        <div >
            <input id="inputSearch" type="text" value={search} onChange={updateSearch} placeholder={"Recherchez un membre"}/>
            <button onClick={handleClick}>Go</button>
            <ul>
                {searchResult.map((item, i) => {
                    return (
                        <li key={i} > 
                        <a href={`${item.id}`} > {item.name} {item.LastName} : {item.role} </a>
                       </li>
                    )
                })}
            </ul>

        </div>
    )
}