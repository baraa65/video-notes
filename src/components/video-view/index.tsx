import React, { Ref } from 'react'

interface VideoViewProps {
	link: string
	videoRef: Ref<HTMLVideoElement>
	onTimeUpdate?: (time: number) => void
}

function VideoView({ link, videoRef, onTimeUpdate }: VideoViewProps) {
	const handleUpdateTime = (e: React.SyntheticEvent<HTMLVideoElement>) => {
		onTimeUpdate && onTimeUpdate(e.currentTarget.currentTime)
	}

	return (
		<div className="h-full">
			{link && (
				<video ref={videoRef} controls onTimeUpdate={handleUpdateTime} className="w-full">
					<source src={link} />
				</video>
			)}
		</div>
	)
}

export default VideoView
