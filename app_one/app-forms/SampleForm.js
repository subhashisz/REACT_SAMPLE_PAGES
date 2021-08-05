import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
	name: 'some value',
	email: '',
	channel: '',
	comments: '',
	address: ''
}
const onSubmit = values => {
	console.log(values)
}
// const validationSchema = Yup.object({
// 	name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
// 	email: Yup.string().email('Invalid email format').required('Required email'),
// 	channel: Yup.string().required('Required channel'),
// })
const validationSchema = Yup.object({
	name: Yup.string().required('Required'),
	email: Yup.string().required('Required email'),
	channel: Yup.string().required('Required channel'),
	comments: Yup.string().min(50, 'Minimum 50 charecters').max(500, 'Maximum 500 charecters allowed')
})
function SampleForm() {

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			<Form>
				<div className='form-control'>
					<label htmlFor='name'>Name</label>
					<Field
						type='text'
						name='name'
						id='name'
					/>
					<ErrorMessage name='name' />
				</div>
				<div className='form-control'>
					<label htmlFor='email'>Email</label>
					<Field
						type='text'
						name='email'
						id='email'
					/>
					<ErrorMessage name='email' />
				</div>
				<div className='form-control'>
					<label htmlFor='channel'>Channel</label>
					<Field
						type='text'
						name='channel'
						id='channel'
					/>
					<ErrorMessage name='channel' />
				</div>
				<div className='form-control'>
					<label htmlFor='comments'>Comments</label>
					<Field
						as='textarea'
						name='comments'
						id='comments'
					/>
					<ErrorMessage name='comments' />
				</div>
				<div className='form-control'>
					<label htmlFor='address'>Address</label>
					<Field name='address'>
						{
							(props) => {
								const { field, form, meta } = props
								console.log(props)
								return <div>
									<input type='text' id='address' {...field} />
									{meta.touched && meta.error ? <div>meta.error</div> : null}
									
								       </div>
							}
						}
					</Field>
				</div>
				<button type='submit'>Submit</button>
			</Form>
		</Formik>
	);

}
export default SampleForm;