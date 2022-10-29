import React, { Ref } from 'react'
import { Note } from '../../models/notes'

export interface MainContextType {
	videoFile: File | null
	time: number
	notes: Note[]

	setVideo: (video: File | null) => void
	setTime: (time: number) => void
	addNote: (note: Note) => void
	setNotes: (notes: Note[]) => void
}

const context: MainContextType = {
	videoFile: null,
	time: 0,
	notes: [],

	setVideo(video: File | null) {},
	setTime(time: number) {},
	addNote(note: Note) {},
	setNotes(notes: Note[]) {},
}

export const MainContext = React.createContext<MainContextType>(context)
