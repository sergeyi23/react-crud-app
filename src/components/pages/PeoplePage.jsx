import React from 'react';
import Page from "./../common/Page";

const data = [
    {first: 'Mark', last: 'Otto', handle: '@motto', id: '1'},
    {first: 'Carl', last: 'Reno', handle: '@ceno', id: '2'},
    {first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3'}
]

function PeoplePage() {
    return (
        <Page
            data={data}
            title="People"
        />
    )
}

export default PeoplePage