import React, { useState } from 'react';
import Input from "./Input";
import Button from "./Button";

function Form ({columns, initialData, onAddData}){

  const [data, setData] = useState(initialData);

  const handleClick = (event) => {
    event.preventDefault();
    onAddData(data);
    setData(initialData)
  }

  const handleChange = (event) => {
    const { currentTarget : input } = event;

    setData({
      ...data,
      [input.name]:input.value
    })
  }


  return (
    <form>
      {columns.map( columnName => (
        <Input
          key={columnName}
          name={columnName}
          label={columnName}
          value={data[columnName]}
          type="input"
          onChange={handleChange}
        />
      ))}
      <Button
        label="Save"
        classes="btn btn-info"
        onClick={handleClick}
      />
    </form>
  );
};

export default Form;
