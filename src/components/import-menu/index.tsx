import { Button, Menu, MenuItem } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import { MainContext } from '../../pages/main/contexts'

function ImportMenu() {
	const { setNotes } = useContext(MainContext)
	const input = useRef<HTMLInputElement | null>(null)
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]

		if (file) {
			var reader = new FileReader()
			reader.readAsText(file, 'UTF-8')
			reader.onload = function (evt) {
				let content = evt?.target?.result?.toString() || '{}'

				let notes = JSON.parse(content)

				setNotes(notes)
			}
		}
	}

	const importFromJson = () => {
		input.current?.click()
	}

	return (
		<>
			<div>
				<input ref={input} style={{ display: 'none' }} type="file" onChange={handleChange} />
				<Button
					id="basic-button"
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					variant="contained"
					onClick={handleClick}
				>
					Import Notes
				</Button>
				<Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
					<MenuItem onClick={importFromJson}>JSON</MenuItem>
					<MenuItem onClick={handleClose}>XML</MenuItem>
					<MenuItem onClick={handleClose}>YAML</MenuItem>
				</Menu>
			</div>
		</>
	)
}

export default ImportMenu
