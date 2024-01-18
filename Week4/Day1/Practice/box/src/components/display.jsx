import React from 'react';

const Display = (props) => {

  const { box } = props;

  return (
    <div>
      {
        box.map((color, i) => (
          <div key={i} style={{ 
              display: "inline-block",
              height: "100px", 
              width: "100px", 
              backgroundColor: color
              }}>
          </div>
        ))
      }
    </div>
  );
}

export default Display;