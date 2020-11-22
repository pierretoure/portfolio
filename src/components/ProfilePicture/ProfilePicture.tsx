import React from 'react';
import bitmoji from 'assets/images/bitmoji.png'
import './ProfilePicture.css';

export default function ProfilePicture() {
	return (
		<img
		className='profile-picture'
		alt="profile"
		src={bitmoji} />
	);
}
