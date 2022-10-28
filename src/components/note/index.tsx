import React from 'react'
import { Note } from '../../models/notes'
import { Card, CardContent } from '@mui/material'

interface NoteProps {
	note: Note
}

function NoteCard({ note }: NoteProps) {
	return (
		<Card className="relative" style={{ background: 'rgb(37 99 235)' }}>
			<div className='px-2 pt-1 text-white'>{note.text}</div>
			<div className="flex justify-end p-1">
				<div className="text-gray-400 text-sm">{note.time}</div>
			</div>
		</Card>
	)
}

export default NoteCard
