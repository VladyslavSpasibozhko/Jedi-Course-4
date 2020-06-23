import React, { useLayoutEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Form from '../common/Form'
import Planets from '../pages/Planets'
import { planetsFormValidation } from '../../formik/schemas'
import { useDispatch, useSelector } from 'react-redux'
import {
	addPlanet,
	checkPlanet,
	getPlanets,
	removePlanet,
	updatePlanet,
} from '../../redux/actions/planetsActions'
import { getItem } from '../../helpers/helpers'
import { getAllPlanets } from '../../redux/selectors/selectors'

const planetsInitial = {
	name: '',
	gravity: '',
	diameter: '',
	climate: '',
	id: '',
}

const name = 'planets'

const PlanetsWrappers = () => {
	const dispatch = useDispatch()
	const data = useSelector(getAllPlanets)

	useLayoutEffect(() => {
		dispatch(getPlanets())
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
							data={planetsInitial}
							onAddData={item => dispatch(addPlanet(item))}
							validation={planetsFormValidation}
						/>
					)}
				/>
				<Route
					exact
					path={`/${name}/:id`}
					component={({ match: { params } }) => (
						<Form
							from={name}
							data={getItem(data, params.id) || planetsInitial}
							onAddData={item => dispatch(updatePlanet(item))}
							validation={planetsFormValidation}
						/>
					)}
				/>
				<Route
					component={() => (
						<Planets
							name={name}
							data={data}
							onChecked={item => dispatch(checkPlanet(item))}
							onRemoveData={item => dispatch(removePlanet(item))}
							isEmpty={data.length === 0}
						/>
					)}
				/>
			</Switch>
		</div>
	)
}

export default PlanetsWrappers
