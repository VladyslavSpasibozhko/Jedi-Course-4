import React from 'react'
import Input from './Input'
import Button from './Button'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'

const Form = ({ data: initialData, onAddData, from, validation }) => {

	const { push } = useHistory()

	const handleClick = item => {
		onAddData(item)
		push(`/${from}`)
	}

	const formik = useFormik({
		initialValues: initialData,
		validationSchema: validation,
		onSubmit: handleClick,
	})

	const { values, errors, handleChange, handleSubmit, touched } = formik

	return (
		<form onSubmit={handleSubmit}>
			{Object.keys(initialData).map(columnName => (
				columnName !== 'beloved' && (
					<Input
						key={columnName}
						name={columnName}
						label={columnName}
						value={values[columnName]}
						type="text"
						onChange={handleChange}
						disabled={initialData[columnName] && columnName === 'id'}
						error={touched[columnName] && errors[columnName]}
					/>
				)
			))}
			<Button type="submit" label="Save" className="btn btn-info" />
		</form>
	)
}

export default Form
