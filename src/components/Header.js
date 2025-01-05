//import * as React from 'react';
import React, {Component} from 'react';

import { useState } from "react";

 function Header() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Increment counter</button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr />
      <ChildComponentOne count={count} />
    </div>
  );
}

function ChildComponentOne({ count }) {
  console.log("Sanjeet component is rendering");
  return (
    <div>
      <h2>This is a child component.</h2>
      <h4>Count: {count}</h4>
    </div>
  );
}

export default  Header;