export function downloadFile(fileName: string, content: string) {
	const link = document.createElement('a')
	link.setAttribute('href', content)
	link.setAttribute('download', fileName)
	link.click()
}
