import React, { Ref } from 'react'

interface VideoViewProps {
	link: string
	videoRef: Ref<HTMLVideoElement>
	onTimeUpdate?: (time: number) => void
	onError?: () => void
}

function VideoView({ link, videoRef, onTimeUpdate, onError }: VideoViewProps) {
	const handleUpdateTime = (e: React.SyntheticEvent<HTMLVideoElement>) => {
		onTimeUpdate && onTimeUpdate(e.currentTarget.currentTime)
	}

	const handleError = () => {
		onError && onError()
	}

	return (
		<div className="h-full">
			{link && (
				<video
					key={link}
					ref={videoRef}
					onError={handleError}
					controls
					onTimeUpdate={handleUpdateTime}
					className="w-full"
				>
					<source src={link} />
				</video>
			)}
		</div>
	)
}

export default VideoView
