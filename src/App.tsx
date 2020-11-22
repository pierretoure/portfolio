import React from 'react';
import './App.css';
import ProfilePicture from './components/ProfilePicture/ProfilePicture';
import Location from './components/Location/Location';
import CV from 'components/CV/CV';

function App() {
	return (
		<div className="App">
			<div className='profile'>
				<div className='profile-informations'>
					<ProfilePicture />
					<div>
						<div className='profile-name'>Pierre TOURÉ</div>
						<div className='profile-description'>Software Engineer</div>
						<div className='profile-location'><Location /></div>
					</div>
				</div>
				<div className='profile-contact-list'>
					<CV />
				</div>
			</div>
		</div>
	);
}

export default App;
