import React from 'react'
// @ts-ignore
import CVpdf from 'assets/cv.pdf';
import CVIcon from 'assets/icons/CV';
import './CV.css';

export default function CV() {
	return (
		<a href={CVpdf} target="_blank" className='profile-cv'>
			<CVIcon size={46} />
			<span style={{ marginLeft: 8 }}>télécharger le CV</span>
		</a>
	)
}
