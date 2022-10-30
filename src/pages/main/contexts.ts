import React, { RefObject } from 'react'
import { Note } from '../../models/notes'

export interface MainContextType {
	videoFile: File | null
	videoLink: string
	time: number
	notes: Note[]
	videoRef: RefObject<HTMLVideoElement> | null

	setVideo: (video: File | null) => void
	setVideoLink: (link: string) => void
	setTime: (time: number) => void
	addNote: (note: Note) => void
	setNotes: (notes: Note[]) => void
}

export const MainContext = React.createContext<MainContextType>({
	videoFile: null,
	videoLink: '',
	time: 0,
	notes: [],
	videoRef: null,

	setVideo(video: File | null) {},
	setVideoLink(link: string) {},
	setTime(time: number) {},
	addNote(note: Note) {},
	setNotes(notes: Note[]) {},
})
