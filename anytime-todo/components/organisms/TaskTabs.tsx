// TaskTabs.tsx

import React, { useEffect, useState } from 'react'

import { ITask } from '../models/ITask'
import TabNavigation from '../molecules/TabNavigation'
import TaskList from './TaskList'
import axios from 'axios'

const TaskTabs: React.FC = () => {
	const [tasks, setTasks] = useState<ITask[]>([])
	const [activeTab, setActiveTab] = useState<'completed' | 'notCompleted'>('notCompleted')

	const fetchData = async () => {
		try {
			const response = await axios.get('/api/tasks')
			setTasks(response.data)
		} catch (error) {
			console.error('Görevler alınırken hata:', error)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	// Aktif sekmeye göre görevleri filtrele
	const filteredTasks = tasks.filter((task) => (activeTab === 'completed' ? task.isCompleted : !task.isCompleted))

	return (
		<div>
			<TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
			<TaskList tasks={filteredTasks} onComplete={() => {}} onDelete={() => {}} />
		</div>
	)
}

export default TaskTabs
