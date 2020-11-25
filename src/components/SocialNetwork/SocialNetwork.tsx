import React, { CSSProperties, Fragment } from 'react'
import ReactTooltip from 'react-tooltip'

interface SocialNetworkProps {
	href: string;
	tooltip: string;
	children: JSX.Element;
	backgroundColor?: string;
	style?: CSSProperties;
}

export default function SocialNetwork({ href, tooltip, backgroundColor, children, style }: SocialNetworkProps) {
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
