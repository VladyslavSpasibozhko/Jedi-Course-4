import React from 'react'
import Title from '../common/Title'
import Table from '../common/Table'
import Empty from '../common/Empty'
import Button from '../common/Button'
import { useHistory } from 'react-router-dom'

const Starships = ({
	data,
	name,
	onRemoveData,
	onChecked,
	isEmpty,
}) => {
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
			<Title title={title} />
			<Table
				tableDescriptor={title}
				{...{ data }}
				{...{ onRemoveData }}
				{...{ onChecked }}
			/>
			<Button
				label="New starship"
				className="btn btn-warning"
				onClick={showFormHandler}
			/>
		</div>
	)
}

export default Starships
