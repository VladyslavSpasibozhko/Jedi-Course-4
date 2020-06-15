import React from 'react'
import Table from '../common/Table'
import Form from '../common/Form'
import { usePageData } from '../../hooks/usePageData'
import Title from '../common/Title'
import Empty from '../common/Empty'

const data = [
  {first: 'Mark', last: 'Otto', handle: '@motto', id: '1'},
  {first: 'Carl', last: 'Reno', handle: '@ceno', id: '2'},
  {first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3'}
]

const People = () => {

  const {
    add,
    state,
    remove,
    columns,
    isEmpty,
    getInitialData
  } = usePageData(data, 'people')

  if(isEmpty()){
    return (
      <Empty
        message='There are no People available'
        {...{columns}}
        {...{getInitialData}}
        {...{add}}
      />
    )
  }

  return (
    <div className="container">
      <Title
        title='People'
      />
      <Table
        data={state}
        columns={columns}
        tableDescriptor="People"
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

export default People
