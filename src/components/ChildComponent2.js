import React from 'react';

const ChildComponent2 = (props) => {
  return (
    <div className="child-2">
      <h3>Child Component 2</h3>
      <button onClick={() => props.onSelectOption('Option 2')}>Option 2</button>
    </div>
  );
};

export default ChildComponent2;
