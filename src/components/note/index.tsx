import React from 'react'
import { Note } from '../../models/notes'
import { Card, CardContent } from '@mui/material'

interface NoteProps {
	note: Note
	isActive: Boolean
}

function NoteCard({ note, isActive }: NoteProps) {
	return (
		<Card
			className="relative"
			style={{ background: isActive ? 'rgb(22 163 74)' : 'rgb(37 99 235)' }}
		>
			<div className="px-2 pt-1 text-white">{note.text}</div>
			<div className="flex justify-end p-1">
				<div className="text-gray-400 text-sm">{note.time}</div>
			</div>
		</Card>
	)
}

export default NoteCard
