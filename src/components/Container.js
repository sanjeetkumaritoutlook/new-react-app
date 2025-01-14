import React from 'react';
import { useRef } from 'react';
import CustomInput from './CustomInput';
function Container(){
    const inputRef = useRef();
    const handleFocus = () => {
        inputRef.current.focus();
    }
    const handleClear = () => {
        inputRef.current.clear();
    }
    return (
    <div>
        <CustomInput ref={inputRef} placeholder="Enter text"/>
        <button onClick={handleFocus}>Focus</button>
        <button onClick={handleClear}>Clear</button>
        </div>);
};

export default Container;