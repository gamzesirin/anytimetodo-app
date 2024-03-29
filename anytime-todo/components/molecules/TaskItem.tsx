import { BiCheckSquare, BiTrash } from 'react-icons/bi'

import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { ITask } from '../models/ITask'
import Link from 'next/link'
import React from 'react'

interface TaskItemProps {
	task: ITask
	onComplete: () => void
	onDelete: () => void
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onComplete, onDelete }) => {
	return (
		<div className="list-group-item d-flex justify-content-between align-items-center">
			<div>
				<h6 className={`mb-1 ${task.isCompleted ? 'text-decoration-line-through' : ''}`}>{task.title}</h6>
				<span className={`d-block text-muted text-truncate ${task.isCompleted ? 'text-decoration-line-through' : ''}`}>
					{task.description}
				</span>
			</div>

			<div className="d-flex gap-2">
				<Link href={`/update/${task.id}`} passHref>
					<button className="btn btn-warning btn-sm">
						<HiOutlinePencilSquare />
					</button>
				</Link>
				<button className="btn btn-success btn-sm" onClick={onComplete}>
					<BiCheckSquare />
				</button>
				<button className="btn btn-danger btn-sm" onClick={onDelete}>
					<BiTrash />
				</button>
			</div>
		</div>
	)
}

export default TaskItem
