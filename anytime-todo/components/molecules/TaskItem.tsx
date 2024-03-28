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
			<span className={task.isCompleted ? 'text-decoration-line-through' : ''}>{task.title}</span>
			<div>
				<Link href={`/update/${task.id}`} passHref>
					<button className="btn btn-warning">
						<HiOutlinePencilSquare />
					</button>
				</Link>
				<button className="btn btn-success" onClick={onComplete}>
					<BiCheckSquare />
				</button>
				<button className="btn btn-danger" onClick={onDelete}>
					<BiTrash />
				</button>
			</div>
		</div>
	)
}

export default TaskItem
