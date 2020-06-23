import types from '../types/types'

const {
	GET_PEOPLE_WATCHER,
	ADD_PERSON_WATCHER,
	UPDATE_PERSON_WATCHER,
	REMOVE_PERSON_WATCHER,
	BELOVED_PERSON_WATCHER,
} = types

export const getPeople = () => ({
	type: GET_PEOPLE_WATCHER,
})

export const addPerson = item => ({
	type: ADD_PERSON_WATCHER,
	item,
})

export const removePerson = item => ({
	type: REMOVE_PERSON_WATCHER,
	item,
})

export const updatePerson = item => ({
	type: UPDATE_PERSON_WATCHER,
	item,
})

export const checkPerson = item => ({
	type: BELOVED_PERSON_WATCHER,
	item,
})
