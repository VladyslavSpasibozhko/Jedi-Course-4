import types from '../types/types'

const { SET_PEOPLE, PEOPLE_ERROR } = types

const initialState = {
	data: [],
	error: false,
}

export const people = (state = initialState, action) => {
	switch (action.type) {
		case SET_PEOPLE:
			return {
				data: action.payload,
				error: false
			}
		case PEOPLE_ERROR:
			return {
				data:[],
				error: true,
			}
		default:
			return state
	}
}
