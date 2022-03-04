import React from 'react';
import Page from "./../common/Page";

const data = [
    {name: "Earth", weight: "5.97", diame: "12742", satellites: "1", id: "1"},
    {name: "Jupiter", weight: "1898", diame: "139820", satellites: "80", id: "2"},
    {name: "Mars", weight: "0.641", diame: "6779", satellites: "2", id: "3"},
]

function PlanetsPage() {
    return (
        <Page
            data={data}
            title="Planets"
        />
    )
}

export default PlanetsPage