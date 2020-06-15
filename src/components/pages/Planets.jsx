import React from 'react'
import Title from '../common/Title'
import Table from '../common/Table'
import Form from '../common/Form'
import { usePageData } from '../../hooks/usePageData'
import faker from 'faker'
import Empty from '../common/Empty'

let data = []
    data.length = 3

   data =  data
      .fill(0)
      .map((item, index) => {
        return {
          country: faker.address.country(),
          city: faker.address.city(),
          street: faker.address.streetName(),
          id: index
        }
    })

const Planets = () => {

  const {
    add,
    state,
    remove,
    columns,
    isEmpty,
    getInitialData
  } = usePageData(data, 'planets')

  if(isEmpty()){
    return (
      <Empty
        message='There are no Planets available'
        {...{columns}}
        {...{getInitialData}}
        {...{add}}
      />
    )
  }

  return (
    <div className="container">
      <Title
        title='Planets'
      />
      <Table
        data={state}
        columns={columns}
        tableDescriptor="Planets"
        onRemoveData={remove}
      />
      <Form
        columns={columns}
        initialData={getInitialData()}
        onAddData={add}
      />
    </div>
  )
}

export default Planets
