import React from 'react';

const ChildComponent1 = (props) => {
  return (
    <div className="child-1">
      <h3>Child Component 1</h3>
      <button onClick={() => props.onSelectOption('Option 1')}>Option 1</button>
    </div>
  );
};

export default ChildComponent1;
