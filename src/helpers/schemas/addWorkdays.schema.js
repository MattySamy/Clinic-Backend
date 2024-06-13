import Joi from 'joi';
const addWorkdays = Joi.object({
	doctorId: Joi.number().required().messages({
		'any.required': 'Doctor ID is required',
		'number.base': 'Doctor ID must be a number',
	}),
	day: Joi.string().required().lowercase().messages({
		'any.required': 'Day is required',
		'date.base': 'Day must be a string',
	}),
});
export default addWorkdays;
