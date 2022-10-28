import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

interface NoteFormProps {
	onSubmit?: (note: string) => void
}

function NoteForm({ onSubmit }: NoteFormProps) {
	const [note, setNote] = useState<string>('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		onSubmit && onSubmit(note)
		setNote('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="p-2">
				<TextField
					label="Note"
					multiline
					rows={3}
					className="w-full"
					value={note}
					onChange={(e) => setNote(e.target.value)}
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
