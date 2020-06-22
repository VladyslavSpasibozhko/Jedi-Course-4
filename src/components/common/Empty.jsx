import React, { useState } from 'react'
import Button from './Button'

const Empty = ({ name, onClickHandler }) => {

	const title = `There are no ${name} available`

  const [ enable, setEnable ] = useState(false)

  return (
    <div className='container'>
      <p
        className="font-weight-bold text-center p-2 h5"
      >
        {title}
      </p>
      {
        <Button
          label="Add"
          className="btn btn-info"
          onClick={() => {
						onClickHandler()
          	setEnable(!enable)
					}}
        />
      }
    </div>
  )
}

export default Empty
