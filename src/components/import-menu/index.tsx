import { Button } from '@mui/material'
import React, { useContext, useRef } from 'react'
import { MainContext } from '../../pages/main/contexts'

function ImportMenu() {
	const { setNotes } = useContext(MainContext)
	const input = useRef<HTMLInputElement | null>(null)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]

		if (file) {
			var reader = new FileReader()
			reader.readAsText(file, 'UTF-8')
			reader.onload = function (evt) {
				let content = evt?.target?.result?.toString() || '{}'

				let notes = JSON.parse(content)

				if (Array.isArray(notes)) setNotes(notes)
				else alert('Invalid file content!')
			}
		}
	}

	const importFromJson = () => {
		input.current?.click()
	}

	return (
		<>
			<div>
				<input
					ref={input}
					style={{ display: 'none' }}
					accept=".json"
					type="file"
					onChange={handleChange}
				/>
				<Button variant="contained" onClick={importFromJson}>
					Import Notes
				</Button>
			</div>
		</>
	)
}

export default ImportMenu
