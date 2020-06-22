import React, { useLayoutEffect } from 'react'
import { usePageData } from '../../hooks/usePageData'
import { useRequest } from '../../hooks/useRequest'
import Form from '../common/Form'
import { Route, Switch } from 'react-router-dom'
import Starships from '../pages/Starships'
import { starshipsFormValidation } from '../../formik/schemas'

const starshipsCol = ['name', 'model', 'passengers', 'length', 'id']
const name = 'starships'

const StarhipsWrapper = () => {
	const {
		add,
		state,
		remove,
		update,
		setData,
		isEmpty,
		checked,
		getInitialData,
	} = usePageData(name, starshipsCol)

	const { getData } = useRequest(name, starshipsCol)

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
							columns={starshipsCol}
							onAddData={add}
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
							data={getInitialData(params.id)}
							columns={starshipsCol}
							onAddData={update}
							validation={starshipsFormValidation}
						/>
					)}
				/>

				<Route
					component={() => (
						<Starships
							name={name}
							data={state}
							columns={starshipsCol}
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

export default StarhipsWrapper
