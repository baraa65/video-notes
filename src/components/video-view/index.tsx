import React from 'react'

interface VideoViewProps {
	video: File | null
	link: string
	onTimeUpdate?: (time: number) => void
}

function VideoView({ video, link, onTimeUpdate }: VideoViewProps) {
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

			{link && (
				<video controls onTimeUpdate={handleUpdateTime} className="w-full">
					<source src={link} />
				</video>
			)}
		</div>
	)
}

export default VideoView
