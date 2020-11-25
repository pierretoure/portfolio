import SocialNetwork from 'components/SocialNetwork/SocialNetwork'
import React from 'react'
import { SiLinkedin } from 'react-icons/si'

export default function LinkedIn() {
	return (
		<SocialNetwork 
		href="https://www.linkedin.com/in/pierre-tour%C3%A9-207549142/"
		tooltip="LinkedIn"
		backgroundColor='#0e76a8'>
			<SiLinkedin 
			size={46} 
			color='#0e76a8' />
		</SocialNetwork>
	)
}
