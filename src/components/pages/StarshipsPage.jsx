import React, {useState} from "react";
import Page from "../common/Page";

const starshipsData = [
    {"Hull Type": "Strike Fighter", Class: "Fighter", Speed: "5", Armor: "5", Mass: "2"},
    {"Hull Type": "Free Merchant", Class: "Frigate", Speed: "3", Armor: "2", Mass: "15"},
    {"Hull Type": "Patrol Boat", Class: "Frigate", Speed: "4", Armor: "5", Mass: "10"},
    {"Hull Type": "Fleet Cruiser", Class: "Frigate", Speed: "1", Armor: "15", Mass: "30"},
]

function StarshipsPage() {
    const [stateData, setData] = useState(starshipsData)
    return (<Page data={starshipsData} title="Starships" stateData={stateData} setData={setData}/> )
}

export default StarshipsPage;