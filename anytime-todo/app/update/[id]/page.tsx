'use client'

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

import TodoForm from '@/components/molecules/TaskAddForm'

const UpdateTodoPage = () => {
	const [data, setData] = useState([])
	const router = useRouter()
	const params = useParams()

	const handleFormSubmit = async (formData: any) => {
		try {
			const response = await fetch(`/api/todos/${params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			})

			if (response.ok) {
				router.push('/')
			}
		} catch (error) {
			console.error('Error:', error)
		}
	}

	return (
		<div className="container p-5">
			<h2 className="py-2">Görev Güncelle</h2>
			<TodoForm onSubmit={handleFormSubmit} buttonLabel="Güncelle" />
		</div>
	)
}

export default UpdateTodoPage
