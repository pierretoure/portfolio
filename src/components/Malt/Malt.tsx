import React, { Fragment } from 'react'
import ReactTooltip from 'react-tooltip'
import MaltLogo from 'assets/icons/malt.png';
import SocialNetwork from 'components/SocialNetwork/SocialNetwork';

export default function Malt() {
	return (
		<SocialNetwork 
		href="https://www.malt.fr/profile/pierretoure"
		tooltip="Malt"
		backgroundColor='#FF5C57'
		style={{marginLeft: 16}}>
			<img 
			src={MaltLogo} 
			alt='malt' 
			width={46}  />
		</SocialNetwork>
	)
}
