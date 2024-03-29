import React, { useEffect, useState } from 'react'
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore'

import { ITask } from '../models/ITask'
import TabNavigation from '../molecules/TabNavigation'
import TaskList from './TaskList'
import axios from 'axios'
import db from '@/app/firebaseConfig'
import { toast } from 'react-toastify'

const TaskTabs: React.FC = () => {
	const [tasks, setTasks] = useState<ITask[]>([])
	const [activeTab, setActiveTab] = useState<'completed' | 'notCompleted'>('notCompleted')

	// Görevleri Firestore'dan çekme
	const fetchData = async () => {
		try {
			const response = await axios.get('/api/tasks')
			setTasks(response.data)
		} catch (error) {
			console.error('Görevler alınırken hata:', error)
		}
	}

	// Görev silme
	const handleDelete = async (id: string) => {
		await deleteDoc(doc(db, 'tasks', id))
		toast.success('Görev başarıyla silindi')
		setTasks((prev) => prev.filter((task) => task.id !== id))
	}

	const handleComplete = async (id: string) => {
		const docRef = doc(db, 'tasks', id)
		const docSnap = await getDoc(docRef)

		if (docSnap.exists()) {
			await updateDoc(docRef, { isCompleted: !docSnap.data().isCompleted })
			setTasks((prevTasks) =>
				prevTasks.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task))
			)
			toast.success('Görev durumu güncellendi')
		} else {
			toast.error('Görev bulunamadı')
		}
	}
	//useEffect ile bileşen yüklendiğinde bir kez çalışacak şekilde fetchData fonksiyonu çağrılır, böylece görevler başlangıçta çekilir.

	useEffect(() => {
		fetchData()
	}, [])

	const filteredTasks = tasks.filter((task) => (activeTab === 'completed' ? task.isCompleted : !task.isCompleted))

	return (
		<div>
			<TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
			<TaskList tasks={filteredTasks} onComplete={handleComplete} onDelete={handleDelete} />
		</div>
	)
}

export default TaskTabs
