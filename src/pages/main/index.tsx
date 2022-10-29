import React, { useRef, useState } from 'react'
import Header from '../../components/header'
import NotesSection from '../../components/notes-section'
import VideoView from '../../components/video-view'
import { Note } from '../../models/notes'
import { MainContext } from './contexts'

function MainPage() {
	const [videoFile, setVideo] = useState<File | null>(null)
	const [time, setTime] = useState<number>(0)
	const [notes, setNotes] = useState<Note[]>([])

	const addNote = (note: Note) => {
		setNotes((notes) => [note, ...notes])
	}

	const context = { videoFile, setVideo, time, setTime, notes, addNote, setNotes }

	return (
		<MainContext.Provider value={context}>
			<div className="flex flex-col h-full">
				<Header />

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
