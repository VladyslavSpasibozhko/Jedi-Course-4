export const add = (arr, item) => [...arr, item]

export const remove = (arr, item) => arr.filter(el => el.id !== item.id)

export const update = (arr, item) => {
	return arr.map(el => {
		if (item.id === el.id) {
			el = { ...item }
		}
		return el
	})
}

export const checked = (arr, item) => {
	return arr.map(el => {
		if (el.id === item.id) {
			el.beloved ? (el.beloved = !el.beloved) : (el.beloved = true)
		}
		return el
	})
}

export const getItem =(state, id)=> state.find(el => el.id === id)

export const setStorage =(name, value)=> sessionStorage.setItem(name, JSON.stringify(value))
