import React, {useState} from "react";
import Page from "../common/Page";

const personData = [
    {first: 'Mark', last: 'Otto', handle: '@motto', id: '1'},
    {first: 'Carl', last: 'Reno', handle: '@ceno', id: '2'},
    {first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3'}
]

function PeoplePage() {
    const [stateData, setData] = useState(personData)
    return (<Page data={personData} title="People" stateData={stateData} setData={setData}/> )
}

export default PeoplePage;