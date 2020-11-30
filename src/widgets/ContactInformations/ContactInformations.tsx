import React, { FC } from 'react'
import { IconType } from 'react-icons';
import './ContactInformations.css';
import { CopyTooltip } from '../CopyTooltip/CopyTooltip';

import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';

interface ContactInformationsProps {
	value: string;
	copyValue?: string;
	Icon: IconType;
}

const ContactInformations: FC<ContactInformationsProps> = ({
	value, 
	copyValue, 
	Icon
}) => {
	return (
		<CopyTooltip value={copyValue ?? value}>
			<div
			className='contact-info'
			style={{ marginBottom: 4 }}>
				<Icon
					className='contact-info-icon'
					size={32}
					color='var(--deep-blue)' />
				{value}
			</div>
		</CopyTooltip>
	)
}

const Email = () => {
	return (
		<ContactInformations
		value='pierre.toure.pro@gmail.com'
		Icon={HiOutlineMail} />
	)
}

const PhoneNumber = () => {
	return (
		<ContactInformations
		value='06 62 60 27 69'
		copyValue='+330662602769'
		Icon={AiOutlinePhone} />
	)
}

export default ContactInformations;
export {
	Email,
	PhoneNumber
};