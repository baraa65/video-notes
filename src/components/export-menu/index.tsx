import { Button, Menu, MenuItem } from '@mui/material'
import React, { useContext, useState } from 'react'
import { MainContext } from '../../pages/main/contexts'
import { downloadFile } from '../../utils/download-file'
import YAML from 'yaml'

function ExportDialog() {
	const { notes } = useContext(MainContext)
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const exportAsJson = () => {
		const json = JSON.stringify(notes)
		const content = 'data:text/json;charset=utf-8,' + encodeURIComponent(json)

		downloadFile('notes.json', content)
	}

	const exportAsYaml = () => {
		const yaml = YAML.stringify(notes)
		const content = 'data:text/yaml;charset=utf-8,' + encodeURIComponent(yaml)

		downloadFile('notes.yaml', content)
	}

	return (
		<>
			<div>
				<Button
					id="basic-button"
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					variant="contained"
					onClick={handleClick}
				>
					Export Notes
				</Button>
				<Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
					<MenuItem onClick={exportAsJson}>JSON</MenuItem>
					<MenuItem onClick={handleClose}>XML</MenuItem>
					<MenuItem onClick={exportAsYaml}>YAML</MenuItem>
				</Menu>
			</div>
		</>
	)
}

export default ExportDialog
