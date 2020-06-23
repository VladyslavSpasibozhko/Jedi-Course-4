import { put, call, select, takeEvery } from 'redux-saga/effects'
import { useRequest } from '../../hooks/useRequest'
import { add, remove, update, checked, setStorage } from '../../helpers/helpers'
import types from '../types/types'
import { getAllPlanets } from '../selectors/selectors'

const planetsCol = ['name', 'gravity', 'diameter', 'climate', 'id']
const name = 'planets'

const {
	SET_PLANETS,
	PLANETS_ERROR,
	GET_PLANETS_WATCHER,
	ADD_PLANET_WATCHER,
	REMOVE_PLANET_WATCHER,
	UPDATE_PLANET_WATCHER,
	BELOVED_PLANET_WATCHER
} = types

const { getData } = useRequest(name, planetsCol)

function* getPlanets() {
	try {
		const planets = yield call(getData)
		yield setPlanet(planets)
	} catch (e) {
		yield put({
			type: PLANETS_ERROR,
		})
	}
}

function* addPlanet({item}) {
	const planets = yield select(getAllPlanets)
	const result = yield add(planets, item)

	yield setPlanet(result)
}

function* removePlanet({item}) {
	const planets = yield select(getAllPlanets)
	const result = yield remove(planets, item)

	yield setPlanet(result)
}

function* belovedPlanet({item}) {
	const planets = yield select(getAllPlanets)
	const result = yield checked(planets, item)

	yield setPlanet(result)
}

function* updatePlanet({item}) {

	const planets = yield select(getAllPlanets)
	const result = yield update(planets, item)

	yield setPlanet(result)

}

function* setPlanet(data) {
	yield put({
		type: SET_PLANETS,
		payload: data,
	})
	yield setToStorage()
}

function* setToStorage() {
	const data = yield select(getAllPlanets)
	setStorage('planets', data)

}

export const planetsSagas = [
	takeEvery(GET_PLANETS_WATCHER, getPlanets),
	takeEvery(ADD_PLANET_WATCHER, addPlanet),
	takeEvery(REMOVE_PLANET_WATCHER, removePlanet),
	takeEvery(BELOVED_PLANET_WATCHER, belovedPlanet),
	takeEvery(UPDATE_PLANET_WATCHER, updatePlanet),
]
