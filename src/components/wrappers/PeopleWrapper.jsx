import React, { useLayoutEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Form from '../common/Form'
import People from '../pages/People'
import { peopleFormValidation } from '../../formik/schemas'
import { useDispatch, useSelector } from 'react-redux'
import { addPerson, getPeople, updatePerson, checkPerson, removePerson } from '../../redux/actions/peopleActions'
import { getItem } from '../../helpers/helpers'
import { getAllPeople } from '../../redux/selectors/selectors'

const name = 'people'
const peopleInitialColumns = {
	name:"",
	mass:"",
	birth_year:"",
	gender: "",
	id:""
}

const PeopleWrapper = () => {

	const dispatch = useDispatch()
	const data = useSelector(getAllPeople)

	useLayoutEffect(() => {
		dispatch(getPeople())
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
							data={peopleInitialColumns}
							onAddData={(item)=> dispatch(addPerson(item))}
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
							data={getItem(data, params.id) || peopleInitialColumns}
							onAddData={(item)=> dispatch(updatePerson(item))}
							validation={peopleFormValidation}
						/>
					)}
				/>

				<Route
					component={() => (
						<People
							name={name}
							data={data}
							onChecked={(item) => dispatch(checkPerson(item)) }
							onRemoveData={(item) => dispatch(removePerson(item))}
							isEmpty={data.length === 0}
						/>
					)}
				/>
			</Switch>
		</div>
	)
}

export default PeopleWrapper


