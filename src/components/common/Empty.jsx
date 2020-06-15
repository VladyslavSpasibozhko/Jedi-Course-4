import React, { useState } from 'react'
import Button from './Button'
import Form from './Form'

const Empty = ({ message, columns, getInitialData, add }) => {

  const [ enable, setEnable ] = useState(false)

  return (
    <div className='container'>
      <p
        className="font-weight-bold text-center p-2 h5"
      >
        {message}
      </p>
      {
        enable
          ? (
            <Form
              columns={columns}
              initialData={getInitialData()}
              onAddData={add}
            />
          ) : (
            <Button
              label="Add"
              classes="btn btn-info"
              onClick={() => setEnable(!enable)}
            />
          )
      }
    </div>
  )
}

export default Empty
