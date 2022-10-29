import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

interface NoteFormProps {
	onSubmit?: (text: string, duration: number) => void
}

function NoteForm({ onSubmit }: NoteFormProps) {
	const [note, setNote] = useState<string>('')
	const [duration, setDuration] = useState<number>(5)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		onSubmit && onSubmit(note, duration)
		setNote('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="p-2">
				<TextField
					label="Note"
					className="w-full"
					value={note}
					onChange={(e) => setNote(e.target.value)}
				/>
			</div>
			<div className="p-2">
				<TextField
					label="Duration"
					className="w-full"
					value={duration}
					type="number"
					onChange={(e) => setDuration(parseInt(e.target.value))}
				/>
			</div>

			<div className="p-2">
				<Button type="submit" variant="contained" className="w-full">
					Add
				</Button>
			</div>
		</form>
	)
}

export default NoteForm
