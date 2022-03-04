import React from 'react';

const Button = ({onClick, label, classes, disabled, value}) => {
    return (
        <button
        value={value}
        disabled={disabled}
        onClick={onClick}
        className={classes}
        >
            {label}
        </button>
    );
};

export default Button;
