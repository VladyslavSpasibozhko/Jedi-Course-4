import { useCallback, useState } from 'react'

export const usePageData = (name, columns) => {
	const [state, setState] = useState([])

	const isEmpty = useCallback(() => {
		return state.length === 0
	}, [state.length])

	const add = data => {
		const newData = [...state, data]
		setData(newData)
	}

	const remove = arrData => {
		const newData = state.filter(item => item.id !== arrData.id)
		setData(newData)
	}

	const update = item => {
		const arr = state.map(el => {
			if (item.id === el.id) {
				el = { ...item }
			}
			return el
		})
		setData([...arr])
	}

	const checked = item => {
		const newState = state.map(el => {
			if (el.id === item.id) {
				el.beloved ? (el.beloved = !el.beloved) : (el.beloved = true)
			}
			return el
		})

		setData(newState)
	}

	const setData = arr => {
		setState(arr)
		setToStorage(arr)
	}

	const getInitialData = id => {
		if (id) {
			const searchedObj = state.find(item => item.id === id)
			if (searchedObj) {
				return searchedObj
			}
		}

		return columns.reduce((acc, item) => {
			acc[item] = ''
			return acc
		}, {})
	}

	const setToStorage = data =>
		sessionStorage.setItem(name, JSON.stringify(data))

	return {
		add,
		state,
		update,
		remove,
		checked,
		setData,
		isEmpty,
		getInitialData,
	}
}
