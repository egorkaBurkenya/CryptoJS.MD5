import React from 'react';

const Button = ({onClick, text}) => {
    return (
        <button className="my-button" onClick={onClick}>{text}</button>
    );
};

export default Button;