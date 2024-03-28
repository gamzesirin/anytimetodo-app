import { BiCheckSquare, BiPencil, BiTrash } from 'react-icons/bi'

import { HiOutlinePencilSquare } from 'react-icons/hi2'
import Link from 'next/link'
import React from 'react'

interface TodoItemProps {
	todo: {
		id: string
		content: string
	}
	onComplete: () => void
	onDelete: () => void
	onUpdate: () => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onComplete, onDelete, onUpdate }) => {
	return (
		<div className="list-group-item d-flex justify-content-between align-items-center flex-wrap gap-3">
			{todo.content}

			<div className="d-flex gap-2">
				<Link href={`/update/${todo.id}`} passHref>
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

export default TodoItem
