import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { MainContext } from '../../pages/main/contexts'
import { downloadFile } from '../../utils/download-file'

function ExportDialog() {
	const { notes } = useContext(MainContext)

	const handleClick = () => {
		exportAsJson()
	}

	const exportAsJson = () => {
		const json = JSON.stringify(notes)
		const content = 'data:text/json;charset=utf-8,' + encodeURIComponent(json)

		downloadFile('notes.json', content)
	}

	return (
		<>
			<div>
				<Button variant="contained" onClick={handleClick}>
					Export Notes
				</Button>
			</div>
		</>
	)
}

export default ExportDialog
