import React from 'react'
import CVIcon from 'assets/icons/CV';
import './CV.css';

interface CVProps {
	style: React.CSSProperties | undefined;
}

export default function CV({ style }: CVProps) {
	return (
		<a 
		href="https://pierretoureportfoliobucket.s3.eu-west-3.amazonaws.com/pierre-toure-cv.pdf" 
		rel="noopener noreferrer" 
		target="_blank" 
		className='profile-cv'
		style={style}>
			<CVIcon size={46} />
			<span style={{ marginLeft: 8 }}>télécharger le CV</span>
		</a>
	)
}
