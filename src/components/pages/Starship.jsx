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
      fileName: faker.system.fileName(),
      commonName: faker.system.commonFileName(),
      mimeType: faker.system.mimeType(),
      id: index
    }
  })

const Starship = () => {

  const {
    add,
    state,
    remove,
    columns,
    isEmpty,
    getInitialData
  } = usePageData(data, 'starship')

  if(isEmpty()){
    return (
      <Empty
        message='There are no Starship available'
        {...{columns}}
        {...{getInitialData}}
        {...{add}}
      />
    )
  }

  return (
    <div className="container">
      <Title
        title='Starship'
      />
      <Table
        data={state}
        columns={columns}
        tableDescriptor="Starship"
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

export default Starship
