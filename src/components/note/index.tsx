import React, { useContext } from 'react'
import { Note } from '../../models/notes'
import { Card } from '@mui/material'
import { secondsToTime } from '../../utils/time'
import { MainContext } from '../../pages/main/contexts'

interface NoteProps {
	note: Note
	isActive: Boolean
}

function NoteCard({ note, isActive }: NoteProps) {
	const { videoRef } = useContext(MainContext)

	const handleClick = (note: Note) => {
		if (videoRef?.current?.currentTime !== undefined) videoRef.current.currentTime = note.time
	}

	return (
		<Card
			className="relative cursor-pointer"
			style={{ background: isActive ? 'rgb(22 163 74)' : 'rgb(37 99 235)' }}
			onClick={() => handleClick(note)}
		>
			<div className="px-2 pt-1 text-white">{note.text}</div>
			<div className="flex justify-end p-1">
				<div className="text-gray-400 text-sm">
					{secondsToTime(note.time)} {'->'} {secondsToTime(note.time + note.duration)}
				</div>
			</div>
		</Card>
	)
}

export default NoteCard
