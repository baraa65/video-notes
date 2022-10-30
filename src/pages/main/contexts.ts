import React, { RefObject } from 'react'
import { Note } from '../../models/notes'

export interface MainContextType {
	videoLink: string
	time: number
	notes: Note[]
	videoRef: RefObject<HTMLVideoElement> | null

	setVideoLink: (link: string) => void
	setTime: (time: number) => void
	addNote: (note: Note) => void
	setNotes: (notes: Note[]) => void
}

export const MainContext = React.createContext<MainContextType>({
	videoLink: '',
	time: 0,
	notes: [],
	videoRef: null,

	setVideoLink(link: string) {},
	setTime(time: number) {},
	addNote(note: Note) {},
	setNotes(notes: Note[]) {},
})
