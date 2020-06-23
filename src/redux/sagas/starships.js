import { put, call, select, takeEvery } from 'redux-saga/effects'
import { useRequest } from '../../hooks/useRequest'
import { add, remove, update, checked, setStorage } from '../../helpers/helpers'
import types from '../types/types'
import { getAllStarships } from '../selectors/selectors'

const starshipsCol = ['name', 'model', 'passengers', 'length', 'id']
const name = 'starships'

const {
	GET_STARSHIPS_WATCHER,
	SET_STARSHIPS,
	STARSHIPS_ERROR,
	ADD_STARSHIP_WATCHER,
	UPDATE_STARSHIP_WATCHER,
	REMOVE_STARSHIP_WATCHER,
	BELOVED_STARSHIP_WATCHER,
} = types

const { getData } = useRequest(name, starshipsCol)

function* getStarships() {
	try {
		const starship = yield call(getData)
		yield setStarship(starship)
	} catch (e) {
		yield put({
			type: STARSHIPS_ERROR,
		})
	}
}

function* addStarship({ item }) {
	const starships = yield select(getAllStarships)
	const result = yield add(starships, item)

	yield setStarship(result)
}

function* removeStarship({ item }) {
	const starships = yield select(getAllStarships)
	const result = yield remove(starships, item)

	yield setStarship(result)
}

function* belovedStarship({ item }) {
	const starships = yield select(getAllStarships)
	const result = yield checked(starships, item)

	yield setStarship(result)
}

function* updateStarship({ item }) {
	const starships = yield select(getAllStarships)
	const result = yield update(starships, item)

	yield setStarship(result)
}

function* setStarship(data) {
	yield put({
		type: SET_STARSHIPS,
		payload: data,
	})
	yield setToStorage()
}

function* setToStorage() {
	const data = yield select(getAllStarships)
	setStorage('starships', data)
}

export const starshipsSagas = [
	takeEvery(GET_STARSHIPS_WATCHER, getStarships),
	takeEvery(ADD_STARSHIP_WATCHER, addStarship),
	takeEvery(REMOVE_STARSHIP_WATCHER, removeStarship),
	takeEvery(BELOVED_STARSHIP_WATCHER, belovedStarship),
	takeEvery(UPDATE_STARSHIP_WATCHER, updateStarship),
]
