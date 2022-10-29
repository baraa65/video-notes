import React, { useContext } from 'react'

import { Button, Dialog, TextField } from '@mui/material'
import { MainContext } from '../../pages/main/contexts'

function AddVideoDialog() {
	const { setVideo } = useContext(MainContext)
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]

		if (file) {
			setVideo(file)
			handleClose()
		}
	}

	return (
		<>
			<Button variant="contained" onClick={handleClickOpen}>
				Open alert dialog
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<div className="p-6">
					<div className="py-2">
						<input type="file" onChange={handleChange} />
					</div>
					<div className="text-xl text-center">--- Or ---</div>
					<div className="py-2">
						<TextField label="Link" className="w-full" />
					</div>

					<div className="flex justify-end">
						<Button variant="contained" onClick={handleClose}>
							Done
						</Button>
					</div>
				</div>
			</Dialog>
		</>
	)
}

export default AddVideoDialog
