'use client'

import React from 'react'
import TaskAddForm from '@/components/molecules/TaskAddForm'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

//Next.js'in yönlendirme işlevselliğini kullanmak için bir hook

const TaskAddPage = () => {
	const router = useRouter()

	const handleFormSubmit = async (data: { title: string; description: string }) => {
		try {
			await axios.post('/api/tasks', data)
			toast.success('Görev başarıyla eklendi.')
			router.push('/')
		} catch (error) {
			toast.error('Görev eklenirken bir hata oluştu.')
		}
	}

	return (
		<div className="container p-5">
			<h2 className="py-2">Görev Ekle</h2>
			<TaskAddForm onSubmit={handleFormSubmit} />
		</div>
	)
}

export default TaskAddPage
