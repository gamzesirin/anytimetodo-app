import {
	DocumentData,
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	orderBy,
	query,
	updateDoc
} from 'firebase/firestore'

import db from '@/app/firebaseConfig'

interface Tasks {
	id: string
	title: string
	description: string
	isCompleted: boolean
	createdAt: string
	updatedAt: string
}

// task eklemek için
export async function POST(request: Request): Promise<Response> {
	const { title, description } = await request.json()

	try {
		const docRef = await addDoc(collection(db, 'tasks'), {
			title,
			description,
			isCompleted: false,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString()
		})

		return new Response(JSON.stringify({ message: 'Görev başarıyla eklendi!' }), {
			status: 201
		})
	} catch (error) {
		console.error('Task ekleme hatası:  ', error)
		return new Response(JSON.stringify({ message: 'Görev eklenirken bir hata oluştu.' }), {
			status: 500
		})
	}
}

// tüm taskleri getirmek için
export async function GET(): Promise<Response> {
	const tasks: Tasks[] = []

	const querySnapshot = await getDocs(collection(db, 'tasks'))

	querySnapshot.forEach((doc) => {
		const data = doc.data() as DocumentData

		tasks.push({
			id: doc.id,
			title: data.title,
			description: data.description,
			isCompleted: data.isCompleted,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt
		})
	})

	return new Response(JSON.stringify(tasks), {
		status: 200
	})
}
