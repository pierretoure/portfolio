import React, { Fragment } from 'react'
import { MdLocationOn } from 'react-icons/md'
import './Location.css';

export default function Location() {
	return (
		<Fragment>
			<MdLocationOn />
			<span style={{ marginLeft: 4 }}>Paris</span>
		</Fragment>
	)
}
