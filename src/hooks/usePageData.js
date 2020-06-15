import { useEffect, useState } from 'react'

export const usePageData =(initialState, name)=> {

  const storageData = JSON.parse(sessionStorage.getItem(name))

  const [ state, setState ] = useState(storageData || initialState || [])

  const columns = Object.keys(initialState[0])

  const isEmpty =()=> state.length === 0

  const add = (data) => setState([...state, data])

  const remove =(arrData)=> {
    setState(state.filter(item => item.id !== arrData.id))
  }

  const getInitialData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {})
  }

  useEffect(()=> {
      sessionStorage.setItem(name, JSON.stringify(state))
  }, [ state ])

  return {
    add,
    state,
    remove,
    isEmpty,
    columns,
    getInitialData
  }
}
