export function jsonToXml(obj: any) {
	var xml = ''

	for (var prop in obj) {
		if (!obj.hasOwnProperty(prop)) continue
		if (obj[prop] == undefined) continue

		xml += '<' + prop + '>'
		if (typeof obj[prop] == 'object') xml += jsonToXml(new Object(obj[prop]))
		else xml += convertXMLString(obj[prop], 'xml')

		xml += '</' + prop + '>'
	}

	let reducedXML = xml.replace(/([_]\d)\w+/g, '')

	return reducedXML
}

function convertXMLString(input: string, outputFormat: string) {
	if (typeof input === 'string') {
		if (outputFormat === 'xml') {
			return input
				.replace(/(&)/g, '&amp;')
				.replace(/(<)/g, '&lt;')
				.replace(/(>)/g, '&gt;')
				.replace(/(')/g, '&apos;')
		} else if (outputFormat === 'string') {
			return input
				.replace(/(&lt;)/g, '<')
				.replace(/(&gt;)/g, '>')
				.replace(/(&apos;)/g, "'")
				.replace(/(&amp;)/g, '&')
		} else {
			return input
		}
	} else {
		return input
	}
}
