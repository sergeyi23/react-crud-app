import React from 'react';

const Input = ({name, label, error, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                {...rest}
                className="form-control"
            />
        </div>
    );
};

export default Input;
