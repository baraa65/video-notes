import React, { useContext } from 'react'
import { MainContext } from '../../pages/main/contexts'

interface VideoViewProps {
	video: File | null
	onTimeUpdate?: (time: number) => void
}

function VideoView({ video, onTimeUpdate }: VideoViewProps) {
	const handleUpdateTime = (e: React.SyntheticEvent<HTMLVideoElement>) => {
		onTimeUpdate && onTimeUpdate(e.currentTarget.currentTime)
	}

	return (
		<div className="h-full">
			{video && (
				<video controls onTimeUpdate={handleUpdateTime} className="w-full">
					<source src={URL.createObjectURL(video)} />
				</video>
			)}
		</div>
	)
}

export default VideoView
