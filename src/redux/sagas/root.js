import { all } from 'redux-saga/effects'
import { peopleSagas } from './people'
import { planetsSagas } from './planets'
import { starshipsSagas } from './starships'

export default function* rootSaga() {
	yield all([
		...peopleSagas,
		...planetsSagas,
		...starshipsSagas
	])
}
