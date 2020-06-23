import types from '../types/types'

const {
	GET_PLANETS_WATCHER,
	ADD_PLANET_WATCHER,
	REMOVE_PLANET_WATCHER,
	UPDATE_PLANET_WATCHER,
	BELOVED_PLANET_WATCHER
} = types

export const getPlanets = () => ({
	type: GET_PLANETS_WATCHER,
})

export const addPlanet = item => ({
	type: ADD_PLANET_WATCHER,
	item,
})

export const removePlanet = item => ({
	type: REMOVE_PLANET_WATCHER,
	item,
})

export const updatePlanet = item => ({
	type: UPDATE_PLANET_WATCHER,
	item,
})

export const checkPlanet = item => ({
	type: BELOVED_PLANET_WATCHER,
	item,
})
