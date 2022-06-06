import React from 'react';

const Button = ({onClick, label, classes, disabled, value ,image, size}) => {
    return (
        <button
            value={value}
            disabled={disabled}
            onClick={onClick}
            className={classes}
        >
            {label}
            {image && <img width={size} height={size} src={image} alt=""/>}
        </button>
    );
};

export default Button;
