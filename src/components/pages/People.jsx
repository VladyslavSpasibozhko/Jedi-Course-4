import React from 'react'
import { useHistory } from 'react-router-dom'
import Table from '../common/Table'
import Title from '../common/Title'
import Empty from '../common/Empty'
import Button from '../common/Button'

const People = ({ data, isEmpty, name, onRemoveData, onChecked }) => {

	const title = name.replace(name[0], name[0].toUpperCase())

	const { push } = useHistory()

	const showFormHandler = () => {
		push(`/${name}/new`)
	}

	if (isEmpty) {
		return <Empty name={title} onClickHandler={showFormHandler} />
	}

	return (
		<div className="container">
			<Title {...{ title }} />
			<Table
				tableDescriptor={title}
				{...{ data }}
				{...{ onRemoveData }}
				{...{ onChecked }}
			/>
			<Button
				label="New person"
				className="btn btn-warning"
				onClick={showFormHandler}
			/>
		</div>
	)
}

export default People
