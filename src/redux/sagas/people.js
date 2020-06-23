import { put, call, select, takeEvery } from 'redux-saga/effects'
import { useRequest } from '../../hooks/useRequest'
import { add, remove, update, checked, setStorage } from '../../helpers/helpers'
import { getAllPeople } from '../selectors/selectors'
import types from '../types/types'

const peopleCol = ['name', 'mass', 'birth_year', 'gender', 'id']
const name = 'people'

const {
	SET_PEOPLE,
	PEOPLE_ERROR,
	ADD_PERSON_WATCHER,
	GET_PEOPLE_WATCHER,
	REMOVE_PERSON_WATCHER,
	UPDATE_PERSON_WATCHER,
	BELOVED_PERSON_WATCHER,
} = types

const { getData } = useRequest(name, peopleCol)

function* getPeople() {
	try {
		const people = yield call(getData)
		yield setPeople(people)
	} catch (e) {
		yield put({
			type: PEOPLE_ERROR,
		})
	}
}

function* addPerson({item}) {
	const people = yield select(getAllPeople)
	const result = yield add(people, item)

	yield setPeople(result)
}

function* removePerson({item}) {
	const people = yield select(getAllPeople)
	const result = yield remove(people, item)

	yield setPeople(result)
}

function* belovedPerson({item}) {
	const people = yield select(getAllPeople)
	const result = yield checked(people, item)

	yield setPeople(result)
}

function* updatePerson({item}) {
	const people = yield select(getAllPeople)
	const result = yield update(people, item)

	yield setPeople(result)

}

function* setPeople(data) {
	yield put({
		type: SET_PEOPLE,
		payload: data,
	})
	yield setToStorage()
}

function* setToStorage() {
	const data = yield select(getAllPeople)
	setStorage('people', data)

}

export const peopleSagas = [
	takeEvery(GET_PEOPLE_WATCHER, getPeople),
	takeEvery(ADD_PERSON_WATCHER, addPerson),
	takeEvery(REMOVE_PERSON_WATCHER, removePerson),
	takeEvery(BELOVED_PERSON_WATCHER, belovedPerson),
	takeEvery(UPDATE_PERSON_WATCHER, updatePerson),
]
