import { combineReducers } from 'redux'
import { people } from './peopleReducer'
import { planets } from './planetsReducer'
import { starships } from './starshipsReducer'

export default combineReducers({
	people,
	planets,
	starships
})
