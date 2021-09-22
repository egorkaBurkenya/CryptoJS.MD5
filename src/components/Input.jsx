import React from 'react';

const Input = ({placeholder, value, setValue}) => {
    return (
        <input 
        className="my-input" 
        type="password" 
        placeholder={placeholder} 
        value={value} 
        onChange={e => setValue(e.target.value)} />
    );
};

export default Input;