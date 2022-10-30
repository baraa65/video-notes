import React, { useRef, useState } from 'react'
import Header from '../../components/header'
import NotesSection from '../../components/notes-section'
import VideoView from '../../components/video-view'
import { Note } from '../../models/notes'
import { MainContext } from './contexts'

function MainPage() {
	const [time, setTime] = useState<number>(0)
	const [notes, setNotes] = useState<Note[]>([])
	const [videoLink, setVideoLink] = useState('')
	const videoRef = useRef<HTMLVideoElement>(null)

	const addNote = (note: Note) => {
		setNotes((notes) => [note, ...notes])
	}

	const context = {
		time,
		setTime,
		notes,
		addNote,
		setNotes,
		videoLink,
		setVideoLink,
		videoRef,
	}

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
							<VideoView
								link={videoLink}
								videoRef={videoRef}
								onTimeUpdate={(time) => setTime(time)}
							/>
						</div>
					</div>
				</div>
			</div>
		</MainContext.Provider>
	)
}

export default MainPage
