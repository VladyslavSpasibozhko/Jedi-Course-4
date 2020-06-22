import * as Yup from 'yup'

export const peopleFormValidation = Yup.object().shape({
	name: Yup.string()
		.min(5, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	mass: Yup.number()
		.moreThan(35, 'Min mass must be 35!')
		.lessThan(200, 'Max mass must be 200!')
		.positive('Uncorrected mass')
		.required('Required'),
	birth_year: Yup.number()
		.integer('Number must be integer')
		.required('Required'),
	gender: Yup.mixed().oneOf(['male', 'female', 'other']).required(),
	id: Yup.string()
		.matches(
			/(?=.*[a-z])(?=.*[0-9])/,
			'ID must contain lowercase and uppercase latter, at least 1 number'
		)
		.min(10, 'Too short!')
		.max(50, 'Too long!')
		.required('Required'),
})

export const planetsFormValidation = Yup.object().shape({
	name: Yup.string()
		.min(5, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	gravity: Yup.string()
		.matches(/(?=.*[0-9])/)
		.required('Required'),
	diameter: Yup.number()
		.integer('Number must be integer')
		.positive("Diameter can't negative")
		.required('Required'),
	climate: Yup.string().required(),
	id: Yup.string()
		.matches(
			/(?=.*[a-z])(?=.*[0-9])/,
			'ID must contain lowercase and uppercase latter, at least 1 number'
		)
		.min(10, 'Too short!')
		.max(50, 'Too long!')
		.required('Required'),
})

export const starshipsFormValidation = Yup.object().shape({
	name: Yup.string()
		.min(5, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	model: Yup.string().required('Required'),
	passengers: Yup.number()
		.integer('Number must be integer')
		.positive("Nubmer of passengers can't be negative")
		.required('Required'),
	length: Yup.number()
		.positive("Length can't be negative")
		.required('Required'),
	id: Yup.string()
		.matches(
			/(?=.*[a-z])(?=.*[0-9])/,
			'ID must contain lowercase and uppercase latter, at least 1 number'
		)
		.min(10, 'Too short!')
		.max(50, 'Too long!')
		.required('Required'),
})
