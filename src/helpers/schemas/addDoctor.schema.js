import Joi from 'joi';
const addDoctorSchema = Joi.object({
	firstName: Joi.string().min(3).required().messages({
		'string.empty': 'Name cannot be an empty field',
		'string.min': 'Name must be at least 3 characters long',
		'any.required': 'Name is a required field',
	}),
	lastName: Joi.string().min(3).required().messages({
		'string.empty': 'Name cannot be an empty field',
		'string.min': 'Name must be at least 3 characters long',
		'any.required': 'Name is a required field',
	}),
	email: Joi.string().required().messages({
		'string.email': 'Email must be a valid email',
		'string.empty': 'Email cannot be an empty field',
		'any.required': 'Email is a required field',
	}),
	phoneNumber: Joi.string().required().messages({
		'string.empty': 'Phone number cannot be an empty field',
		'any.required': 'Phone number is a required field',
		'string.pattern.base':
			'Phone number must be a valid Egyptian phone number',
	}),
	degree: Joi.string().messages({
		'string.empty': 'Degree cannot be an empty field',
		'any.required': 'Degree is a required field',
	}),
	experience: Joi.string().messages({
		'string.empty': 'Experience cannot be an empty field',
		'any.required': 'Experience is a required field',
	}),
	skills: Joi.string().messages({
		'string.empty': 'Skills cannot be an empty field',
		'any.required': 'Skills is a required field',
	}),
	certifications: Joi.string().messages({
		'string.empty': 'Certifications cannot be an empty field',
		'any.required': 'Certifications is a required field',
	}),
	Twitter: Joi.string().messages({
		'string.empty': 'Twitter cannot be an empty field',
		'string.uri': 'Twitter must be a valid URL',
		'any.required': 'Twitter is a required field',
	}),
	Facebook: Joi.string().messages({
		'string.empty': 'Facebook cannot be an empty field',
		'string.uri': 'Facebook must be a valid URL',
		'any.required': 'Facebook is a required field',
	}),
	Instagram: Joi.string().messages({
		'string.empty': 'Instagram cannot be an empty field',
		'string.uri': 'Instagram must be a valid URL',
		'any.required': 'Instagram is a required field',
	}),
	Linkedin: Joi.string().messages({
		'string.empty': 'Instagram cannot be an empty field',
		'string.uri': 'Instagram must be a valid URL',
		'any.required': 'Instagram is a required field',
	}),
	branchId: Joi.number().messages({
		'number.empty': 'Branch ID cannot be an empty field',
		'any.required': 'Branch ID is a required field',
	}),
	image: Joi.string().messages({
		'string.empty': 'Image cannot be an empty field',
		'any.required': 'Image is a required field',
	}),
});
export default addDoctorSchema;
