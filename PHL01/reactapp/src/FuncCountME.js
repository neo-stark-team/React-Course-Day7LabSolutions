import React, { useState, useEffect } from 'react';

function FuncCountME() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `By Hook ${count} `;
  });

  return (
    <div>
        Counting :
      <p>{count} times</p>
      <h6>See Title</h6>
      <button onClick={() => setCount(count + 1)}>
        COUNT
      </button>
    </div>
  );
}

export default FuncCountME;