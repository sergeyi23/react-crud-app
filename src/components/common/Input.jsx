import React from 'react';

const Input = ({name, label, width, ...rest}) => {
    return (
        <div className="form-group mt-1">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                {...rest}
                className={`form-control w-${width || `50`}`}
            />
        </div>
    );
};

export default Input;
