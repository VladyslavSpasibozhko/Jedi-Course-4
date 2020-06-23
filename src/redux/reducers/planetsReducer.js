import types from '../types/types'

const { SET_PLANETS, PLANETS_ERROR } = types

const initialState = {
	data: [],
	error: false,
}

export const planets = (state = initialState, action) => {
	switch (action.type) {
	case SET_PLANETS:
		return {
			data: action.payload,
			error: false
		}
	case PLANETS_ERROR:
		return {
			data:[],
			error: true,
		}
	default:
		return state
	}
}
