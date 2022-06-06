import React from 'react';

const Select = ({
    data,
    name,
    selectedValues,
    multiple,
    onClick,
    onChange,
    width,
}) => (
    <select
        id={name}
        multiple={multiple}
        name={name}
        className={`form-select mb-1 w-${width || `50`}`}
        size={multiple || ""}
        onChange={onChange}
    >
        {data.map(({id, name}) =>
            <option
                key={id}
                value={id}
                onClick={() => onClick(id)}
                selected={id === selectedValues && "selected"}
            >
                {name}
            </option>
        )}
    </select>
);

export default Select;