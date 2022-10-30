import React, { useContext, useState } from 'react'

import { Button, Dialog, TextField } from '@mui/material'
import { MainContext } from '../../pages/main/contexts'


function AddVideoDialog() {
	const { setVideo, setVideoLink } = useContext(MainContext)
	const [open, setOpen] = useState(false)
	const [link, setLink] = useState('')

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]

		if (file) {
			setVideoLink('')
			setLink('')
			setVideo(file)
			handleClose()
		}
	}

	const handleDone = () => {
		setVideo(null)
		setVideoLink(link)
		handleClose()
	}

	return (
		<>
			<Button variant="contained" onClick={handleClickOpen}>
				Add Video
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<div className="p-6">
					<div className="py-2">
						<input type="file" accept='.mp4,.mkv' onChange={handleChange} />
					</div>
					<div className="text-xl text-center">--- Or ---</div>
					<div className="py-2">
						<TextField
							label="Link"
							className="w-full"
							value={link}
							onChange={(e) => setLink(e.target.value)}
						/>
					</div>

					<div className="flex justify-end">
						<Button variant="contained" onClick={handleDone}>
							Done
						</Button>
					</div>
				</div>
			</Dialog>
		</>
	)
}

export default AddVideoDialog
