import React, { useEffect, useState } from 'react';
import './App.css';
import ProfilePicture from './components/ProfilePicture/ProfilePicture';
import Location from './components/Location/Location';
import CV from 'components/CV/CV';
import { SnackbarProvider } from 'notistack';
import Email from 'components/ContactInformation/components/Email';
import PhoneNumber from 'components/ContactInformation/components/PhoneNumber';
import LinkedIn from 'components/LinkedIn/LinkedIn';
import Malt from 'components/Malt/Malt';

function App() {
	const [activePhrase, setActivePhrase] = useState("");

	useEffect(() => {
		const fetchActivePhrase = async () => {
			fetch('https://pierretoureportfoliobucket.s3.eu-west-3.amazonaws.com/active-phrase.txt')
				.then((r) => {
					console.log(r);
					return r.text();
				})
				.then(text  => {
					setActivePhrase(text);
				})  
		}
		fetchActivePhrase();
		return () => {}
	}, [setActivePhrase])

	return (
		<SnackbarProvider maxSnack={3}>
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
					{activePhrase && 
					<div className='profile-active-phrase'>
						{activePhrase}
					</div>
					}
					<CV style={{marginBottom: 32}} />
					<div className='profile-contact-list'>
						<Email />
						<PhoneNumber />
					</div>
					<div className='profile-social-networks'>
						<LinkedIn />
						<Malt />
					</div>
				</div>
			</div>
		</SnackbarProvider>
	);
}

export default App;
