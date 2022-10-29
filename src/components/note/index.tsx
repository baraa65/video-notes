import React from 'react'
import { Note } from '../../models/notes'
import { Card, CardContent } from '@mui/material'

interface NoteProps {
	note: Note
	isActive: Boolean
}

function NoteCard({ note, isActive }: NoteProps) {
	const secondsToTime = (num: number) => {
		let sec_num = Math.floor(num)
		let hours = Math.floor(sec_num / 3600)
		let minutes = Math.floor((sec_num - hours * 3600) / 60)
		let seconds = sec_num - hours * 3600 - minutes * 60

		return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${
			seconds < 10 ? '0' + seconds : seconds
		}`
	}

	return (
		<Card
			className="relative"
			style={{ background: isActive ? 'rgb(22 163 74)' : 'rgb(37 99 235)' }}
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
