import React, { useContext } from 'react'
import { MainContext } from '../../pages/main/contexts'
import AddVideoDialog from '../add-video-dialog'
import ExportMenu from '../export-menu'
import ImportMenu from '../import-menu'

function Header() {
	return (
		<div
			className="flex justify-between items-center px-4 bg-slate-600"
			style={{ height: '80px' }}
		>
			<div className="flex gap-3">
				<AddVideoDialog />
				<ExportMenu />
				<ImportMenu />
			</div>
		</div>
	)
}

export default Header
