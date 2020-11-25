import { useSnackbar } from 'notistack';
import React, { Fragment } from 'react'
import { IconType } from 'react-icons';
import ReactTooltip from 'react-tooltip';
import './ContactInformation.css';

interface ContactInformationProps {
	value: string;
	copyValue?: string;
	Icon: IconType;
}

export default function ContactInformation({value, copyValue, Icon}: ContactInformationProps) {
    const { enqueueSnackbar } = useSnackbar();

	const copy = (value: string) => {
		navigator.clipboard.writeText(value).then(() => {
			enqueueSnackbar('Copié dans le presse papier !', {variant: 'success'});
		}, () => {
			enqueueSnackbar('Echec de la copie dans le presse papier !', {variant: 'error'});
		});
	}

	return (
		<Fragment>
			<div
			className='contact-info'
			onClick={() => { copy(copyValue ?? value); } }
			data-tip="copier"
			data-for="copy-tooltip"
			style={{ marginBottom: 4 }}>
				<Icon
					className='contact-info-icon'
					size={32}
					color='var(--deep-blue)' />
				{value}
			</div>
			<ReactTooltip id='copy-tooltip' effect='solid' place='right' type='info' backgroundColor="var(--deep-blue)"/>
		</Fragment>
	)
}
