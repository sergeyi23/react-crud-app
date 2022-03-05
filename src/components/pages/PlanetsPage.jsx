import React, {useState} from "react";
import Page from "../common/Page";

const planetData = [
    {name: "Mercury", weight: "3.33×10²³ кг", "average temperature": "67 °C", },
    {name: "Earth", weight: "5.97×10²⁴ кг", "average temperature": "14 °C", },
    {name: "Mars", weight: "6.42×10²³ кг", "average temperature": "-63,1 °C", },
]

function PlanetsPage() {
    const [stateData, setData] = useState(planetData)
    return (<Page data={planetData} title="Planets" stateData={stateData} setData={setData}/> )
}

export default PlanetsPage;