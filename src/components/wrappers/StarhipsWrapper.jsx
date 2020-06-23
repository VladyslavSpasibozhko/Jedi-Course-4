import React, { useLayoutEffect } from 'react'
import Form from '../common/Form'
import { Route, Switch } from 'react-router-dom'
import Starships from '../pages/Starships'
import { starshipsFormValidation } from '../../formik/schemas'
import { useDispatch, useSelector } from 'react-redux'
import {
	addStarship,
	checkStarship,
	getStarships,
	removeStarship,
	updateStarship,
} from '../../redux/actions/starshipsActions'
import { getItem } from '../../helpers/helpers'
import { getAllStarships } from '../../redux/selectors/selectors'

const starshipsInitialData = {
	name: '',
	model: '',
	passengers: '',
	length: '',
	id: '',
}
const name = 'starships'

const StarhipsWrapper = () => {
	const dispatch = useDispatch()
	const data = useSelector(getAllStarships)

	useLayoutEffect(() => {
		dispatch(getStarships())
	}, [])

	return (
		<div className="container">
			<Switch>
				<Route
					exact
					path={`/${name}/new`}
					component={() => (
						<Form
							from={name}
							data={starshipsInitialData}
							onAddData={item => dispatch(addStarship(item))}
							validation={starshipsFormValidation}
						/>
					)}
				/>
				<Route
					exact
					path={`/${name}/:id`}
					component={({ match: { params } }) => (
						<Form
							from={name}
							data={getItem(data, params.id) || starshipsInitialData}
							onAddData={item => dispatch(updateStarship(item))}
							validation={starshipsFormValidation}
						/>
					)}
				/>

				<Route
					component={() => (
						<Starships
							name={name}
							data={data}
							onChecked={item => dispatch(checkStarship(item))}
							onRemoveData={item => dispatch(removeStarship(item))}
							isEmpty={data.length === 0}
						/>
					)}
				/>
			</Switch>
		</div>
	)
}

export default StarhipsWrapper
