import React from 'react';
import Page from "./../common/Page";

const data = [
    {name: "Falcon Heavy", length: "120", weight: "1000", creator: "USA", id: "1"},
    {name: "Falcon 9", length: "80", weight: "800", creator: "USA", id: "2"},
    {name: "Starship SN15", length: "100", weight: "950", creator: "USA", id: "3"},
]

function StarshipsPage() {
    return (
        <Page
            data={data}
            title="Starships"
        />
    )
}

export default StarshipsPage