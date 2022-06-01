import React from 'react';

const Select = ({
    data,
    name,
    selectedValues,
    multiple,
    onClick,
    onChange
}) => {

    //const formattedData = data.filter(item => item.id );

    return (
        <select
            id={name}
            multiple={multiple}
            name={name}
            className="form-select mb-1"
            size={multiple || ""}
            onChange={onChange}
        >
            {/*{<option selected value={selectedValues.id}>{selectedValues.name}</option>}*/}
            {data.map(({id, name}) =>
                <option
                    key={id}
                    value={id}
                    onClick={() => onClick(id)}
                    selected={id === selectedValues ? "selected" : ""}
                >
                    {name}
                </option>
            )}
        </select>
    );
};

export default Select;