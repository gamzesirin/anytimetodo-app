'use client'

import { ErrorMessage, Field, Form, Formik } from 'formik'

import React from 'react'

interface TaskAddFormProps {
	onSubmit: (data: { title: string; description: string }) => void //TaskAddForm bileşeninin onSubmit adında bir prop alması gerektiğini gösterir. Bu propda bir data argümanı alır
}

const TaskAddForm: React.FC<TaskAddFormProps> = ({ onSubmit }) => {
	return (
		<div className="container mt-3">
			<Formik
				initialValues={{ title: '', description: '' }}
				validate={(values) => {
					const errors: Record<string, string> = {}
					if (!values.title) {
						errors.title = 'Zorunlu alan'
					}
					if (!values.description) {
						errors.description = 'Zorunlu alan'
					}
					return errors
				}}
				onSubmit={(values, { setSubmitting }) => {
					onSubmit(values)
					setSubmitting(false)
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<div className="mb-3">
							<label htmlFor="title" className="form-label">
								Görev Başlığı
							</label>
							<Field type="text" name="title" className="form-control" />
							<ErrorMessage name="title" component="div" className="text-danger" />
						</div>

						<div className="mb-3">
							<label htmlFor="description" className="form-label">
								Açıklama
							</label>
							<Field as="textarea" name="description" className="form-control" rows="3" />
							<ErrorMessage name="description" component="div" className="text-danger" />
						</div>

						<div className="d-flex justify-content-end">
							<button type="submit" className="btn btn-primary" disabled={isSubmitting}>
								Görevi Ekle
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default TaskAddForm
