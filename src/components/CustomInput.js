
import React from 'react';
import {useRef, forwardRef, useImperativeHandle } from 'react';
const CustomInput = forwardRef((props,ref) => {
    const inputRef = useRef();
  //useImperativeHandle is a React Hook that lets you customize the 
  // instance value exposed by a ref when using React.forwardRef.
  //  It's commonly used to control or expose specific methods or properties from a
  //  child component to its parent.  
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        clear: () => {
            inputRef.current.value = '';
        },
    }));
    return <input ref={inputRef} {...props} />;
});

export default CustomInput;

//In React 19, ref can be used without this forwardRef() function.