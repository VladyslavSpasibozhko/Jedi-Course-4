import React, { useLayoutEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { usePageData } from '../../hooks/usePageData'
import { useRequest } from '../../hooks/useRequest'
import Form from '../common/Form'
import Planets from '../pages/Planets'
import { planetsFormValidation } from '../../formik/schemas'

const planetsCol = ['name', 'gravity', 'diameter', 'climate', 'id']
const name = 'planets'

const PlanetsWrappers = () => {

	const {
		add,
		state,
		remove,
		update,
		setData,
		isEmpty,
		checked,
		getInitialData,
	} = usePageData(name, planetsCol)

	const { getData } = useRequest(name, planetsCol)

	useLayoutEffect(() => {
		(async () => {
			try {
				const data = await getData()
				setData(data)
			} catch (e) {
				console.log(e)
			}
		})()
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
							data={getInitialData()}
							columns={planetsCol}
							onAddData={add}
							validation={planetsFormValidation}
						/>
					)}
				/>
				<Route
					exact
					path={`/${name}/:id`}
					component={({ match: { params }}) => (
						<Form
							from={name}
							data={getInitialData(params.id)}
							columns={planetsCol}
							onAddData={update}
							validation={planetsFormValidation}
						/>
					)}
				/>
				<Route
					component={() => (
						<Planets
							name={name}
							data={state}
							columns={planetsCol}
							onChecked={checked}
							onRemoveData={remove}
							isEmpty={isEmpty}
						/>
					)}
				/>
			</Switch>
		</div>
	)
}

export default PlanetsWrappers
