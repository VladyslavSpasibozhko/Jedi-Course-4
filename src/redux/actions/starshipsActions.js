import types from '../types/types'

const {
	GET_STARSHIPS_WATCHER,
	ADD_STARSHIP_WATCHER,
	UPDATE_STARSHIP_WATCHER,
	REMOVE_STARSHIP_WATCHER,
	BELOVED_STARSHIP_WATCHER,
} = types

export const getStarships = () => ({
	type: GET_STARSHIPS_WATCHER,
})

export const addStarship = item => ({
	type: ADD_STARSHIP_WATCHER,
	item,
})

export const removeStarship = item => ({
	type: REMOVE_STARSHIP_WATCHER,
	item,
})

export const updateStarship = item => ({
	type: UPDATE_STARSHIP_WATCHER,
	item,
})

export const checkStarship = item => ({
	type: BELOVED_STARSHIP_WATCHER,
	item,
})
