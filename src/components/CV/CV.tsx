import React from 'react'
import CVIcon from 'assets/icons/CV';
import './CV.css';

export default function CV() {
	return (
		<a 
		href="https://pierretoureportfoliobucket.s3.eu-west-3.amazonaws.com/pierre-toure-cv.pdf" 
		rel="noopener noreferrer" 
		target="_blank" 
		className='profile-cv'>
			<CVIcon size={46} />
			<span style={{ marginLeft: 8 }}>télécharger le CV</span>
		</a>
	)
}
