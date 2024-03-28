// TaskList.tsx

import { ITask } from '../models/ITask'
import React from 'react'
import TaskItem from '../molecules/TaskItem'

interface TaskListProps {
	tasks: ITask[]
	onComplete: (id: string) => void
	onDelete: (id: string) => void
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onComplete, onDelete }) => {
	return (
		<div className="list-group">
			{tasks.map((task) => (
				<TaskItem key={task.id} task={task} onComplete={() => onComplete(task.id)} onDelete={() => onDelete(task.id)} />
			))}
		</div>
	)
}

export default TaskList
