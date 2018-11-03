import React, { useState } from 'react'
import { Link } from '@reach/router'
import BaseHeader from '../../layouts/BaseHeader'
import COOLors from './COOLors'

const HomeHeader = props => {
	const [active, setActive] = useState('home')

	return (
		<BaseHeader>
			<BaseHeader.Container>
				<BaseHeader.Item
					active={active === 'home' ? 'true' : 'false'}
					as={Link}
					onClick={e => setActive('home')}
				>
					<COOLors />
				</BaseHeader.Item>
				<BaseHeader.Item
					active={active === 'palettes' ? 'true' : 'false'}
					as={Link}
					onClick={e => setActive('palettes')}
				>
					<div>Palettes</div>
				</BaseHeader.Item>
			</BaseHeader.Container>

			<BaseHeader.Container>
				<BaseHeader.Item>
					<div>save</div>
				</BaseHeader.Item>
				<BaseHeader.Item>
					<div>shuffle</div>
				</BaseHeader.Item>
			</BaseHeader.Container>
		</BaseHeader>
	)
}

export default HomeHeader