'use client'

import React, { useEffect, useState } from 'react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useParams, useRouter } from 'next/navigation'

import TaskUpdateForm from '@/components/molecules/TaskUpdateForm'
import db from '@/app/firebaseConfig'
import { toast } from 'react-toastify'

const TaskUpdatePage = () => {
	const [initialValues, setInitialValues] = useState({ title: '', description: '' })
	const router = useRouter()
	const { id } = useParams()

	useEffect(() => {
		const fetchData = async () => {
			if (id) {
				const docRef = doc(db, 'tasks', id.toString())
				const docSnap = await getDoc(docRef)

				if (docSnap.exists()) {
					setInitialValues({ title: docSnap.data().title, description: docSnap.data().description })
				} else {
					toast.error('Görev bulunamadı')
					router.push('/')
				}
			}
		}

		fetchData()
	}, [id])

	const handleEdit = async (formData: any) => {
		try {
			if (!id) return
			const docRef = doc(db, 'tasks', id.toString())
			await updateDoc(docRef, formData)

			toast.success('Görev başarıyla güncellendi')
			router.push('/')
		} catch (error) {
			console.error('Görev güncellenirken hata:', error)
			toast.error('Bir hata oluştu')
		}
	}

	return (
		<div className="container p-5">
			<h2 className="py-2">Görev Güncelle</h2>
			<TaskUpdateForm initialValues={initialValues} onSubmit={handleEdit} />
		</div>
	)
}

export default TaskUpdatePage
