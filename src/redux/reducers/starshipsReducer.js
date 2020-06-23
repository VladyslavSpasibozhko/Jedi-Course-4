import types from '../types/types'

const { SET_STARSHIPS, STARSHIPS_ERROR } = types

const initialState = {
	data: [],
	error: false,
}

export const starships = (state = initialState, action) => {
	switch (action.type) {
	case SET_STARSHIPS:
		return {
			data: action.payload,
			error: false
		}
	case STARSHIPS_ERROR:
		return {
			data:[],
			error: true,
		}
	default:
		return state
	}
}
