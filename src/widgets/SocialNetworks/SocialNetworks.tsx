import React, { CSSProperties, Fragment } from 'react'
import ReactTooltip from 'react-tooltip'

import { SiLinkedin } from 'react-icons/si'
import MaltLogo from 'assets/icons/malt.png';

interface SocialNetworkProps {
	href: string;
	tooltip: string;
	children: JSX.Element;
	backgroundColor?: string;
	style?: CSSProperties;
}

const SocialNetwork = ({ 
	href, 
	tooltip, 
	backgroundColor, 
	children, 
	style 
}: SocialNetworkProps) => {
	const tooltipId = `social-network-${tooltip}`;
	return (
		<Fragment>
			<a 
			href={href} 
			target="_blank"
			rel="noopener noreferrer"
			data-tip={tooltip}
			data-for={tooltipId} 
			style={{textDecoration: 'none', height: 46, ...style}}>
				{children}
			</a>
			<ReactTooltip 
			id={tooltipId} 
			effect='solid' 
			place='top' 
			backgroundColor={backgroundColor} />
		</Fragment>
	)
}

const Malt = () => {
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

const LinkedIn = () => {
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

export default SocialNetwork;

export {
	Malt,
	LinkedIn
};