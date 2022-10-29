import React, { useContext } from 'react'
import { Note } from '../../models/notes'
import { MainContext } from '../../pages/main/contexts'
import NoteCard from '../note'
import NoteForm from '../note-form'

function NotesSection() {
	const { time, notes, addNote } = useContext(MainContext)

	const handleSubmit = (text: string, duration: number) => {
		addNote({ text, time, duration })
	}

	const isActive = (note: Note) => {
		const diff = time - note.time

		return diff < note.duration && diff > 0
	}

	return (
		<div className={`h-full w-full bg-slate-300`}>
			<div className="flex flex-col" style={{ height: '100%' }}>
				<div className="flex-1 overflow-auto">
					{notes.map((note, i) => (
						<div key={i} className="px-2 pt-2">
							<NoteCard note={note} isActive={isActive(note)} />
						</div>
					))}
				</div>
				<div>
					<NoteForm onSubmit={handleSubmit} />
				</div>
			</div>
		</div>
	)
}

export default NotesSection
