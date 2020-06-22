import React, { useLayoutEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { usePageData } from '../../hooks/usePageData'
import { useRequest } from '../../hooks/useRequest'
import Form from '../common/Form'
import People from '../pages/People'
import { peopleFormValidation } from '../../formik/schemas'

const peopleCol = ['name', 'mass', 'birth_year', 'gender', 'id']
const name = 'people'

const PeopleWrapper = () => {
	const {
		add,
		state,
		remove,
		update,
		setData,
		isEmpty,
		checked,
		getInitialData,
	} = usePageData(name, peopleCol)

	const { getData } = useRequest(name, peopleCol)

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
							columns={peopleCol}
							onAddData={add}
							validation={peopleFormValidation}
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
							columns={peopleCol}
							onAddData={update}
							validation={peopleFormValidation}
						/>
					)}
				/>

				<Route
					component={() => (
						<People
							name={name}
							data={state}
							columns={peopleCol}
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

export default PeopleWrapper
