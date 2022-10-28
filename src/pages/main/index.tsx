import React, { useRef, useState } from 'react'
import NotesSection from '../../components/notes-section'
import VideoView from '../../components/video-view'
import { Note } from '../../models/notes'
import { MainContext } from './contexts'

function MainPage() {
	const [videoFile, setVideo] = useState<File | null>(null)
	const [time, setTime] = useState<number>(0)
	const [notes, setNotes] = useState<Note[]>([])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]

		if (file) setVideo(file)
	}

	const addNote = (note: Note) => {
		setNotes((notes) => [note, ...notes])
	}

	const context = { videoFile, setVideo, time, setTime, notes, addNote }

	return (
		<MainContext.Provider value={context}>
			<div className="flex flex-col h-full">
				<div className="flex items-center px-4 bg-slate-600" style={{ height: '80px' }}>
					<input type="file" onChange={handleChange} />
				</div>

				<div className="flex-1 overflow-hidden">
					<div className="grid grid-cols-4 grid-rows-1 h-full" style={{ maxHeight: '100%' }}>
						<div className="col-span-1">
							<NotesSection />
						</div>
						<div className="col-span-3">
							<VideoView video={videoFile} onTimeUpdate={(time) => setTime(time)} />
						</div>
					</div>
				</div>
			</div>
		</MainContext.Provider>
	)
}

export default MainPage
