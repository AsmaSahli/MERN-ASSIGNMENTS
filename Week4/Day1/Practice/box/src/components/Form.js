import React, { useState } from 'react';

const Form = (props) => {

  const { box, setBox } = props;


  const [ color, setColor] = useState("");
  
  const submitHandler = (e) => {

    e.preventDefault();

    setBox( [ ...box, color ] );
  }

  return (
    <div>
      <form onSubmit={ submitHandler } >
          <label htmlFor="color">Color</label>
          <input type="text"name="color"onChange={ (e) => setColor(e.target.value) }/>
        <button>Add</button>
      </form>

  </div>
  )
}

export default Form;