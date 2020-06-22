import { v4 as uuidv4 } from 'uuid';

export const useRequest =(name, columns)=> {

  const baseUrl = 'https://swapi.dev/api/'

  const loadData = async () => {
    try {
      const data = await fetch(baseUrl + name)
      return await data.json()
    } catch (e) {
      console.log(e)
      return null
    }
  }

  const getStorageData =()=> JSON.parse(sessionStorage.getItem(name))

  const transformData =(data)=> {
    return  data.results.map(item => {
      return  columns.reduce((acc, col)=> {

        if (col === 'id'){
          acc[col] = uuidv4()
          return acc
        }

        if (item[col]){
          acc[col] = item[col]
          return  acc
        }

        return acc
      }, {})
    })
  }

  const getData = async ()=> {

      const storageData = await getStorageData()

      if(storageData){
        return storageData
      } else {
        const data = await loadData()
        return await transformData(data)
      }
  }

  return {
    getData
  }

}
